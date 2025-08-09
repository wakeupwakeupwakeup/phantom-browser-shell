import { BrowserWindow, shell } from 'electron'
import { ExtensionContext } from '../context'
import { ExtensionEvent } from '../router'
import debug from 'debug'
import path from 'path'
import { app } from 'electron'

const d = debug('electron-chrome-extensions:identity')
const SHELL_ROOT_DIR = path.join(__dirname, '../../')
const ROOT_DIR = path.join(__dirname, '../../../../')
const PATHS = {
  WEBUI: app.isPackaged
    ? path.resolve(process.resourcesPath, 'ui')
    : path.resolve(SHELL_ROOT_DIR, 'browser', 'ui'),
  PRELOAD: path.join(__dirname, '../renderer/browser/preload.js'),
  LOCAL_EXTENSIONS: app.isPackaged
    ? path.resolve(process.resourcesPath, 'extensions')
    : path.join(ROOT_DIR, 'extensions'),
  ICON: app.isPackaged
    ? path.resolve(process.resourcesPath, 'assets', 'icon.png')
    : path.join(SHELL_ROOT_DIR, 'assets', 'icon.png'),
}

/**
 * Basic implementation of the identity API.
 * This is a stub implementation that provides basic functionality.
 */
export class IdentityAPI {
  constructor(private ctx: ExtensionContext) {
    const handle = this.ctx.router.apiHandler()
    handle('identity.getRedirectURL', this.getRedirectURL)
    handle('identity.launchWebAuthFlow', this.launchWebAuthFlow)
  }

  private getRedirectURL = ({ extension }: ExtensionEvent, path?: string) => {
    // Return a mock redirect URL for the extension
    const baseUrl = `chrome-extension://${extension.id}`
    return path ? `${baseUrl}/${path}` : baseUrl
  }

  private launchWebAuthFlow = async (
    { extension }: ExtensionEvent,
    details: chrome.identity.WebAuthFlowOptions,
  ): Promise<string> => {
    d('launchWebAuthFlow called', { extensionId: extension.id, details })

    if (!details.url) {
      throw new Error('URL is required for web auth flow')
    }

    // For non-interactive flows, try to make a direct request
    if (!details.interactive) {
      try {
        // For non-interactive flows, we can't really do much without user interaction
        // Just return the URL as Chrome would do in this case
        d('Non-interactive flow, returning URL')
        return details.url
      } catch (error) {
        d('Non-interactive flow failed', error)
        throw error
      }
    }

    // For interactive flows, open a popup window
    return new Promise((resolve, reject) => {
      const authWindow = new BrowserWindow({
        width: 800,
        height: 800,
        show: true,
        icon: PATHS.ICON, // Icon for Linux
        modal: true,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          sandbox: true,
        },
      })

      // Load the auth URL
      authWindow.loadURL(details.url)

      d('Opened auth window for URL:', details.url)

      // Listen for navigation events to detect the redirect
      const handleNavigation = (url: string) => {
        d('Navigation detected:', url)

        // Check if this is a redirect to the extension
        if (url.startsWith(`chrome-extension://${extension.id}`)) {
          d('Redirect detected, closing auth window')
          authWindow.close()
          resolve(url)
          return
        }

        // Check for common OAuth callback patterns
        const redirectUri = `chrome-extension://${extension.id}`
        if (url.startsWith(redirectUri)) {
          d('OAuth callback detected, closing auth window')
          authWindow.close()
          resolve(url)
          return
        }
      }

      // Listen for URL changes
      authWindow.webContents.on('will-navigate', (event, url) => {
        handleNavigation(url)
      })

      authWindow.webContents.on('did-navigate', (event, url) => {
        handleNavigation(url)
      })

      authWindow.webContents.on('did-navigate-in-page', (event, url) => {
        handleNavigation(url)
      })

      // Handle window close
      authWindow.on('closed', () => {
        d('Auth window closed by user')
        reject(new Error('User cancelled the authentication flow'))
      })

      // Handle load failures
      authWindow.webContents.on(
        'did-fail-load',
        (event, errorCode, errorDescription, validatedURL) => {
          d('Auth window failed to load:', { errorCode, errorDescription, validatedURL })
          authWindow.close()
          reject(new Error(`Failed to load authentication page: ${errorDescription}`))
        },
      )
    })
  }
}
