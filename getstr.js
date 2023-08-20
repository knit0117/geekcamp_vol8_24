function getstr(){
    var select = info.selectionText;
    return select;
}

document.addEventListener('select',function(){
    var text = getstr();
    console.log(text);
});