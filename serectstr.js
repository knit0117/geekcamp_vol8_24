document.addEventListener('select',function(){
    (async () => {
        const selectedText = window.getSelection().toString();
        const response = await chrome.runtime.sendMessage({selectedText});
        console.log(response);
      })();
});