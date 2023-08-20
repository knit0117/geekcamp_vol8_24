chrome.contextMenus.create({
    id:"selectstr",
    title: "単語を辞書に登録",
    contexts:["selection"]
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
        let word = info.selectionText; 
        console.log(word);
});