chrome.contextMenus.create({
    title: "単語を辞書に登録",
    contexts:["selection"],
    onclick(getstr,tab){
        console.log(getstr)
        chrome.tabs.sendMessage(tab.id,{key:getstr})
    }
})