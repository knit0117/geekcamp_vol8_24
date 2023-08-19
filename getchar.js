function getchar(){
    var select = window.getSelection().anchorNode.parentElement;
    var text = select.innerText;
    return text;
}

document.addEventListener('select',function(){
    var text = getchar();
    console.log(text);
});