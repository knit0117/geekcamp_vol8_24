chrome.storage.sync.get("keywords", ({ keywords }) => {
    const keywordList = document.getElementById("keywordList");
  
    if (keywords && keywords.length > 0) {
      for (const keyword of keywords) {
        const li = document.createElement("li");
        li.textContent = keyword;
        keywordList.appendChild(li);
      }
    } else {
      const li = document.createElement("li");
      li.textContent = "No keywords set";
      keywordList.appendChild(li);
    }
  });
  