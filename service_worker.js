chrome.runtime.onInstalled.addListener(() => {
    fetch(chrome.runtime.getURL('keywords.json'))
      .then(response => response.json())
      .then(data => {
        chrome.storage.sync.set({ keywords: data.keywords });
      });
});

chrome.extension.onMessage.addListener(() => {
    const selection = window.getSelection()
    const text = selection.toString()
    console.log(text)
})
  