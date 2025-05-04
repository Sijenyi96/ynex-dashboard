document.querySelectorAll('.show-code-btn').forEach(button => {
    button.addEventListener('click', function () {
        let codeBox = this.closest('.alert-container').querySelector('.code-box');
        codeBox.style.display = codeBox.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.alert-container').remove();
    });
});