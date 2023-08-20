let currentContents = '';
const displayElement = document.getElementById('contents');

document.getElementById('inputFile').addEventListener('click', (e) => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.setAttribute('hidden', true);

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContents = e.target.result;
      displayElement.textContent = fileContents;
      currentContents = fileContents;
    }
    reader.readAsText(file);
  }, false);
  
  document.body.appendChild(fileInput);
  fileInput.click();
  fileInput.remove();
}, false);


document.getElementById('outputFile').addEventListener('click', (e) => {
  const downloadLink = document.createElement('a');
  downloadLink.download = 'export.txt';
  downloadLink.href = URL.createObjectURL(new Blob([currentContents], { 'type' : 'application/json' }));
  downloadLink.setAttribute('hidden', true);

  document.body.appendChild(downloadLink);
  downloadLink.download='export-data.json'
  downloadLink.click();
  downloadLink.remove();
}, false);






/*const exportData = () => {
  // 適当なデータ
  const data = {
    name: 'Taro',
    age: 28
  }

  const json = JSON.stringify(data, null, ' ')
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const linkTag = document.createElement('a')
  linkTag.href = url
  linkTag.download = 'export-data.json'
  linkTag.click()

  URL.revokeObjectURL(url)
  linkTag.remove()
}

const btn = document.querySelector('#export')
btn.addEventListener('click', exportData, false)

/**
 * import処理
 * @param {object} e
 
 const importData = e => {
  const result = JSON.parse(e.target.result)

  // 別途バリデーション用意し通す
  const valid = validate(result)

  if(!valid) {
    return false
  }

  console.log(result)
}

// readerを用意しonloadイベントにimportData指定
const reader = new FileReader()
reader.onload = importData

const fileSelector = document.querySelector('#import')
const fileUploadInput = document.querySelector('#file-upload')

fileSelector.addEventListener('change', e => {
  const file = e.target.files[0]
  fileUploadInput.value = '' // 同名ファイルの読み込み時にイベント発火が出来ないのでクリア

  if (!file) {
    return false
  }

  if (file.type !== 'application/json') {
    return false
  }

  reader.readAsText(file)
}, false)*/



