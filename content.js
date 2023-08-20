chrome.storage.sync.get("keywords", ({ keywords }) => {
    if (keywords && keywords.length > 0) {
      const regexPattern = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
  
      function highlightKeywords(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const matches = node.nodeValue.match(regexPattern);
          if (matches) {
            const replacedText = node.nodeValue.replace(regexPattern, match => {
              return `<span class="keyword-highlight">${match}</span>`;
            });
            const span = document.createElement("span");
            span.innerHTML = replacedText;
            node.parentNode.replaceChild(span, node);
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          for (const childNode of node.childNodes) {
            highlightKeywords(childNode);
          }
        }
      }
  
      setTimeout(() => {
        highlightKeywords(document.body);
      }, 1000);
    }
  });
  