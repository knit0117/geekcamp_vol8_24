function save_options() {
    var api_key = document.getElementById('api_key').value;
    var secret_key = document.getElementById('secret_key').value;
    
    chrome.storage.sync.set({
        api_key: api_key,
        secret_key: secret_key
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);

        // Update info.json file
        var info = {
            api_key: api_key,
            secret_key: secret_key
        };
        updateInfoJson(info);

        window.close();
    });
}

function updateInfoJson(info) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "info.json", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("info.json updated successfully.");
        }
    };
    xhr.send(JSON.stringify(info));
}

function restore_options() {
    chrome.storage.sync.get({
        api_key: 'input here',
        secret_key: 'input here'
    }, function (items) {
        document.getElementById('api_key').value = items.api_key;
        document.getElementById('secret_key').value = items.secret_key;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
