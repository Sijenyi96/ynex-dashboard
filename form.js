function toggleCode() {
    const codeBlock = document.getElementById("code-block");
    if (codeBlock.style.display === "none") {
      codeBlock.textContent = document.documentElement.innerHTML;
      codeBlock.style.display = "block";
    } else {
      codeBlock.style.display = "none";
    }
  }

  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      street: document.getElementById("street").value,
      email: document.getElementById("email").value,
      landmark: document.getElementById("landmark").value,
      dob: document.getElementById("dob").value,
      city: document.getElementById("city").value,
      maritalStatus: document.getElementById("maritalStatus").value,
      state: document.getElementById("state").value,
      postalCode: document.getElementById("postalCode").value,
      country: document.getElementById("country").value,
      contactNumber: document.getElementById("contactNumber").value,
      altContact: document.getElementById("altContact").value,
      checkMeOut: document.getElementById("checkMeOut").checked
    };
    alert("Form submitted:\n" + JSON.stringify(data, null, 2));
    this.reset();
  });