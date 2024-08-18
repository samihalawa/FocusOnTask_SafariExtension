chrome.storage.local.get('task', (data) => {
  if (data.task) {
    document.getElementById('task-title').innerText = data.task.title;
    document.getElementById('task-subtitle').innerText = data.task.subtitle;

    let timer = 0;
    const interval = setInterval(() => {
      timer += 1;
      document.getElementById('timer').innerText = new Date(timer * 1000).toISOString().substr(11, 8);
    }, 1000);

    document.getElementById('task-done').addEventListener('click', () => {
      clearInterval(interval);
      chrome.storage.local.remove('task');
      alert('Task completed!');
      window.close();
    });
  }
});
