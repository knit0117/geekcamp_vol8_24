const fs = require("fs");

function replacer(key,value){
  if (key === 'Mean') {
		return undefined;
	}
	return value;
}

var myStructure = {
    "Python":"オブジェクト指向の汎用的なプログラミング言語",
    "Rust":"C++に似たメモリ安全性を保証できる新しめなプログラミング言語",
    "Javascript" : "webなどで広く使われている言語"
}
var jsonData = JSON.stringify(myStructure,replacer,"\t");
fs.writeFileSync("example.json",jsonData);
