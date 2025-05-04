const form = document.getElementById('registrationForm');
const errorDiv = document.getElementById('errorMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorDiv.textContent = "";

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    errorDiv.textContent = "Passwords do not match.";
    return;
  }

  if (!form.checkValidity()) {
    errorDiv.textContent = "Please complete all required fields correctly.";
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});
