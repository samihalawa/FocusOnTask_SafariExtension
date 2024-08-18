chrome.storage.local.get('task', (data) => {
  if (data.task) {
    const overlay = document.createElement('iframe');
    overlay.src = chrome.runtime.getURL('overlay.html');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);
  }
});
