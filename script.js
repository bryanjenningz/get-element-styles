let selectedElementComputedStyle = null;

addEventListener('contextmenu', event => {
  selectedElementComputedStyle = getComputedStyle(event.target);
});

chrome.runtime.onMessage.addListener(request => {
  if (request.type == 'SHOW_STYLE') {
    console.log(selectedElementComputedStyle);
  }
});
