;(async function clearPhantomData() {
  console.log('🧹 Starting to clear Phantom extension data...')

  try {
    await new Promise((resolve) => {
      chrome.storage.local.clear(() => {
        console.log('✅ Chrome storage.local cleared')
        resolve()
      })
    })

    await new Promise((resolve) => {
      chrome.storage.sync.clear(() => {
        console.log('✅ Chrome storage.sync cleared')
        resolve()
      })
    })

    if (chrome.storage.session) {
      await new Promise((resolve) => {
        chrome.storage.session.clear(() => {
          console.log('✅ Chrome storage.session cleared')
          resolve()
        })
      })
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.clear()
      console.log('✅ localStorage cleared')
    }

    // Clear sessionStorage (if available)
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.clear()
      console.log('✅ sessionStorage cleared')
    }

    // Clear IndexedDB (if there are databases)
    if (typeof indexedDB !== 'undefined') {
      try {
        const databases = await indexedDB.databases()
        for (const db of databases) {
          if (db.name) {
            indexedDB.deleteDatabase(db.name)
            console.log(`✅ IndexedDB database "${db.name}" deleted`)
          }
        }
      } catch (e) {
        console.log('⚠️ Failed to clear IndexedDB:', e.message)
      }
    }

  } catch (error) {
    console.error('❌ Error clearing data:', error)
  }
})()
