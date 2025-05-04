function toggleCode(btn) {
    const codeBlock = btn.closest('.card').querySelector('.code-block');
    const isShown = codeBlock.style.display === 'block';
    codeBlock.style.display = isShown ? 'none' : 'block';
    btn.textContent = isShown ? 'Show Code' : 'Hide Code';
  }