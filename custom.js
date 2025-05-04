const form = document.getElementById('registrationForm');
const errorDiv = document.getElementById('errorMessage');

function showError(message, element) {
  errorDiv.textContent = message;
  if (element) {
    element.classList.add('input-error');
    element.focus();
  }
}

function clearErrors() {
  errorDiv.textContent = '';
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors();

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const dob = document.getElementById('dob');
  const address = document.getElementById('address');
  const state = document.getElementById('state');
  const city = document.getElementById('city');
  const pincode = document.getElementById('pincode');
  const terms = document.getElementById('terms');
  const genderSelected = document.querySelector('input[name="gender"]:checked');

  if (!firstName.value.trim()) return showError("First Name is required", firstName);
  if (!lastName.value.trim()) return showError("Last Name is required", lastName);
  if (!phone.value.match(/^\d{10}$/)) return showError("Enter a valid 10-digit phone number", phone);
  if (!email.value.match(/^\S+@\S+\.\S+$/)) return showError("Enter a valid email address", email);
  if (password.value.length < 6) return showError("Password must be at least 6 characters", password);
  if (password.value !== confirmPassword.value) return showError("Passwords do not match", confirmPassword);
  if (!dob.value) return showError("Date of Birth is required", dob);
  if (!address.value.trim()) return showError("Address is required", address);
  if (!state.value.trim()) return showError("State is required", state);
  if (!city.value.trim()) return showError("City is required", city);
  if (!pincode.value.match(/^\d{6}$/)) return showError("Enter a valid 6-digit Pincode", pincode);
  if (!genderSelected) return showError("Please select a gender");
  if (!terms.checked) return showError("You must agree to the terms and conditions");

  alert("Form submitted successfully!");
  form.reset();
});
