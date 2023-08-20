fetch('info.json')
    .then(response => response.json())
    .then(data => {
        data["ddd"] = "iii"; // 新しい要素を既存のオブジェクトに追加
        // 更新されたデータをサーバーに送信する場合、fetchまたは他の適切な方法を使用
    })
    .catch(error => console.error('Error fetching JSON:', error));
