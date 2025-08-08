
function clearExtensionData() {
  // Clear chrome.storage.local
  chrome.storage.local.clear(() => {
    console.log('Chrome storage.local cleared')
  })

  // Clear chrome.storage.sync
  chrome.storage.sync.clear(() => {
    console.log('Chrome storage.sync cleared')
  })

  if (chrome.storage.session) {
    chrome.storage.session.clear(() => {
      console.log('Chrome storage.session cleared')
    })
  }

}

clearExtensionData()
