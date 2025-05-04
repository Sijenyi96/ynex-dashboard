document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let emails = document.querySelectorAll('.email-item');
    emails.forEach(email => {
        let text = email.getAttribute('data-name');
        if (text && text.includes(filter)) {
            email.style.display = '';
        } else {
            email.style.display = 'none';
        }
    });
});

function showEmails(category) {
    let emailLists = document.querySelectorAll('.email-list');
    emailLists.forEach(list => list.classList.remove('active'));
    document.getElementById(category).classList.add('active');
}

function openCompose() {
    document.getElementById('composeMail').classList.add('active');
}

function closeCompose() {
    document.getElementById('composeMail').classList.remove('active');
}

function sendMail() {
    let to = document.getElementById('to').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    if (to && subject && message) {
        alert(`Mail sent to ${to}\nSubject: ${subject}\nMessage: ${message}`);
        closeCompose();
    } else {
        alert("Please fill all fields before sending.");
    }
}