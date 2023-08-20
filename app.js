var fs = require('fs');

const bufferData = fs.readFileSync('info.json');
const dataJSON = bufferData.toString();
const data = JSON.parse(dataJSON);

data["ddd"] = "iii"; // 新しい要素を既存のオブジェクトに追加

const updatedJSON = JSON.stringify(data);
fs.writeFileSync('info.json', updatedJSON);
