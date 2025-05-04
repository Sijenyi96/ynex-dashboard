function toggleCode(id) {
    const code = document.getElementById(id);
    code.style.display = code.style.display === 'block' ? 'none' : 'block';
  }

  function undoAction() {
    alert('Undo action triggered!');
  }

  function closeToast() {
    const toast = document.getElementById('condensedToast');
    toast.style.display = 'none';
  }

  function toggleCode(id) {
    const code = document.getElementById(id);
    code.style.display = code.style.display === 'block' ? 'none' : 'block';
  }

  function closeToast(element) {
    const toast = element.closest('.condensed-toasted');
    if (toast) toast.style.display = 'none';
  }