function toggleCode(button) {
  const codeBox = button.parentElement.parentElement.querySelector('.code-box');
  if (codeBox.style.display === 'block') {
    codeBox.style.display = 'none';
    button.textContent = 'Show Code';
  } else {
    codeBox.style.display = 'block';
    button.textContent = 'Hide Code';
  }
}

