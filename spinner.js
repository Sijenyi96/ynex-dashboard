const buttons = document.querySelectorAll('.show-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const codeBlock = btn.nextElementSibling;
    const isVisible = codeBlock.style.display === 'block';
    codeBlock.style.display = isVisible ? 'none' : 'block';
    btn.textContent = isVisible ? 'Show Code' : 'Hide Code';
  });
});