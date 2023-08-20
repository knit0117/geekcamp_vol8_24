document.addEventListener("DOMContentLoaded", function () {
    // Load existing values from storage and populate the input fields
    chrome.storage.sync.get(["api_key", "secret_key"], function (data) {
      var apiKey = data.api_key || "";
      var secretKey = data.secret_key || "";
  
      // Set initial input values to empty strings
      var apiKeyInput = document.getElementById("api_key");
      var secretKeyInput = document.getElementById("secret_key");
      apiKeyInput.value = "";
      secretKeyInput.value = "";
  
      // Set event listener for save button click
      document.getElementById("save").addEventListener("click", function () {
        // Get values from input fields
        var apiKey = apiKeyInput.value;
        var secretKey = secretKeyInput.value;
  
        // Load existing JSON data from storage
        chrome.storage.sync.get(["info"], function (storedData) {
          var existingInfo = storedData.info || {};
  
          // Update existingInfo with the new apiKey and secretKey pair
          existingInfo[apiKey] = secretKey;
  
          // Save updated JSON data to storage
          chrome.storage.sync.set(
            {
              info: existingInfo,
            },
            function () {
              // Update status to indicate successful save
              var status = document.getElementById("status");
              status.textContent = "Saved!";
              window.close();
              setTimeout(function () {
                status.textContent = "";
              }, 1500);
            }
          );
        });
      });
    });
  


    chrome.storage.sync.get(["api_key", "secret_key", "info"], function (data) {
        var apiKey = data.api_key;
        var secretKey = data.secret_key;
        var existingInfo = data.info || {};
      
        // 取得した値を使用する処理を記述
      
        existingInfo[apiKey] = secretKey;
      
        console.log("Existing Data:", data);
        console.log("Updated Info:", existingInfo);
      
        // Save updated info back to storage
        chrome.storage.sync.set(
          {
            info: existingInfo,
          },
          function () {
            console.log("Updated info saved.");
          }
        );
      });
    });

