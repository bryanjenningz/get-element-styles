chrome.contextMenus.create({
  contexts: ['all'],
  title: 'Get element styles',
  onclick: () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {type: 'SHOW_STYLE'});
    });
  }
});
