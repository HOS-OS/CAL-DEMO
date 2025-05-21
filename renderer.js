const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to buttons
  document.getElementById('minimize-btn').addEventListener('click', () => {
    ipcRenderer.send('minimize-window');
  });

  document.getElementById('maximize-btn').addEventListener('click', () => {
    ipcRenderer.send('maximize-window');
  });

  document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('close-window');
  });
  
  const closeBtn = document.getElementById('close-btn');
  const minimizeBtn = document.getElementById('minimize-btn');
  const maximizeBtn = document.getElementById('maximize-btn');
  
  // Prevent calculator buttons from being draggable
  const calcButtons = document.querySelectorAll('input[type="button"]');
  calcButtons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    });
  });
});