document.getElementById('add-task').addEventListener('click', () => {
  const title = document.getElementById('task-title').value;
  const subtitle = document.getElementById('task-subtitle').value;

  if (title && subtitle) {
    chrome.storage.local.set({ task: { title, subtitle, startTime: new Date() } }, () => {
      alert('Task added!');
      chrome.runtime.sendMessage({ action: 'startFocusMode' });
    });
  }
});
