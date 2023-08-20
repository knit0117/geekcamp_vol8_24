document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const wordTitle = document.getElementById("wordTitle");
    const wordMeaning = document.getElementById("wordMeaning");
    // const modalClose = document.querySelector(".modalClose");

    const jsonUrl = "sample.json";
    
    document.addEventListener("mousedown", function(event) {
        const selectedText = window.getSelection().toString();
        if (selectedText !== "") {
            fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                const wordData = data[selectedText];
                if (wordData) {
                    wordTitle.textContent = "単語：" + selectedText;
                    wordMeaning.textContent = "意味：" + wordData.mean;
                    // ↓これいる？
                    modal.style.display = "block"
                }
            })
            .catch(error => {
                console.error("JSONデータの取得に失敗しました。", error);
            });
          //elseがあると辞書画面タップすると消えちゃうけどどうしよう
        } 
    });

    // else {
    //     modal.style.display = "none";
    // // 

    // modalClose.addEventListener("click", () => {
    //     modal.style.display = "none";
    // });

    // document.addEventListener("click", (e) => {
    //     if(e.target == modal) {
    //         modal.style.display = "none";
    //     }
    // })
});

