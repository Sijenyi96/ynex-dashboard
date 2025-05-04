function toggleSearchModal(event) {
    event.stopPropagation();
    const modal = document.getElementById('searchModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}
function removeSearch(event, element) {
    event.stopPropagation();
    element.parentElement.remove();
}
function removeFilter(event, element) {
    event.stopPropagation();
    element.parentElement.remove();
}
function clearRecents() {
    document.querySelector('.recent-searches').innerHTML = '';
}
function openPage(page) {
    alert("Opening " + page + " page");
}

function openPage(mail) {
    window.location.href = "email.html"; 
}
function openPage(notifications) {
    window.location.href = "notification.html"; 
}
function openPage(alert) {
    window.location.href = "alert.html"; 
}


document.addEventListener("click", function() {
    document.getElementById("searchModal").style.display = "none";
});

function toggleDropdown() {
    document.getElementById("dropdownMenu").style.display = 
        document.getElementById("dropdownMenu").style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("dropdownMenu");
    let button = document.querySelector(".dropdown-btn");
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let icon = document.getElementById("theme-icon");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");
    } else {
        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");
    }
});