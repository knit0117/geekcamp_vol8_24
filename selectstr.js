chrome.extension.onRequest.addListener(() => {
    const selection = window.getSelection()
    const text = selection.toString()
    console.log(text)
})