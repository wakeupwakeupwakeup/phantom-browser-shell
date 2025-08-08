import { ExtensionContext } from '../context'
import { ExtensionEvent } from '../router'
import { BrowserActionAPI } from './browser-action'
import { BrowserWindow } from 'electron'
import debug from 'debug'

const d = debug('electron-chrome-extensions:sidePanel')

/**
 * Implementation of the sidePanel API that creates standalone windows.
 * This provides compatibility with extensions that use sidePanel API.
 */
export class SidePanelAPI {
  private sidePanelWindows: Map<string, BrowserWindow> = new Map()

  constructor(
    private ctx: ExtensionContext,
    private browserActionAPI: BrowserActionAPI,
  ) {
    const handle = this.ctx.router.apiHandler()
    handle('sidePanel.open', this.open)
    handle('sidePanel.close', this.close)
    handle('sidePanel.setOptions', this.setOptions)
    handle('sidePanel.getOptions', this.getOptions)
  }

  private open = async (event: ExtensionEvent, options?: { tabId?: number; windowId?: number }) => {
    return true;
    // try {
    //   const { extension } = event
    //   const extensionId = extension.id

    //   d(`Opening sidePanel for extension ${extensionId}`)

    //   // Close existing sidePanel window for this extension if it exists
    //   const existingWindow = this.sidePanelWindows.get(extensionId)
    //   if (existingWindow && !existingWindow.isDestroyed()) {
    //     d(`Closing existing sidePanel window for ${extensionId}`)
    //     existingWindow.close()
    //     this.sidePanelWindows.delete(extensionId)
    //   }

    //   // Get the popup URL from browser action
    //   const popupUrl = this.getPopupUrl(extensionId)
    //   if (!popupUrl) {
    //     console.warn(`sidePanel.open: No popup URL found for extension ${extensionId}`)
    //     return false
    //   }

    //   d(`Creating standalone window for sidePanel with URL: ${popupUrl}`)

    //   // Create a standalone window for the sidePanel
    //   const sidePanelWindow = new BrowserWindow({
    //     width: 360,
    //     height: 600,
    //     resizable: true,
    //     maximizable: false,
    //     frame: true,
    //     titleBarStyle: 'default',
    //     title: `${extension.name} - Side Panel`,
    //     webPreferences: {
    //       sandbox: true,
    //       nodeIntegration: false,
    //       contextIsolation: true,
    //       session: this.ctx.session,
    //     },
    //   })

    //   // Store the window reference
    //   this.sidePanelWindows.set(extensionId, sidePanelWindow)

    //   // Add the window's webContents as a tab to the extensions system
    //   this.ctx.store.addTab(sidePanelWindow.webContents, sidePanelWindow)

    //   // Load the extension URL
    //   await sidePanelWindow.loadURL(popupUrl)

    //   // Remove window reference when closed
    //   sidePanelWindow.on('closed', () => {
    //     this.sidePanelWindows.delete(extensionId)
    //     d(`SidePanel window closed for ${extensionId}`)
    //   })

    //   // Disable menu for sidePanel window
    //   sidePanelWindow.setMenu(null)

    //   // Optional: Open DevTools for debugging
    //   if (process.env.SHELL_DEBUG) {
    //     sidePanelWindow.webContents.openDevTools({ mode: 'detach' })
    //   }

    //   d(`SidePanel window created successfully for ${extensionId}`)
    //   return true
    // } catch (error) {
    //   console.error('sidePanel.open error:', error)
    //   return false
    // }
  }

  private getPopupUrl(extensionId: string): string | null {
    // Get the action for this extension
    const action = (this.browserActionAPI as any).actionMap?.get(extensionId)
    if (!action?.popup) {
      return null
    }

    // Get the extension
    const sessionExtensions = this.ctx.session.extensions || this.ctx.session
    const extension = sessionExtensions.getExtension(extensionId)
    if (!extension) {
      return null
    }

    // Build the full URL
    return `chrome-extension://${extensionId}/${action.popup}`
  }

  private close = async ({ extension }: ExtensionEvent) => {
    try {
      const extensionId = extension.id
      const sidePanelWindow = this.sidePanelWindows.get(extensionId)

      if (sidePanelWindow && !sidePanelWindow.isDestroyed()) {
        d(`Closing sidePanel window for ${extensionId}`)
        sidePanelWindow.close()
        this.sidePanelWindows.delete(extensionId)
        return true
      }

      d(`No sidePanel window found to close for ${extensionId}`)
      return false
    } catch (error) {
      console.error('sidePanel.close error:', error)
      return false
    }
  }

  private setOptions = async (
    { extension }: ExtensionEvent,
    options: chrome.sidePanel.PanelOptions,
  ) => {
    // This is a stub implementation
    // In a real implementation, this would set side panel options
    console.warn('sidePanel.setOptions is not fully implemented')
    return true
  }

  private getOptions = async ({ extension }: ExtensionEvent) => {
    // This is a stub implementation
    // In a real implementation, this would get side panel options
    console.warn('sidePanel.getOptions is not fully implemented')
    return {}
  }
}
