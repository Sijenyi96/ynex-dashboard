function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown");
    const button = document.querySelector(".icon-btn");

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});

function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("tableBody");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let nameCell = rows[i].getElementsByTagName("td")[0];
        if (nameCell) {
            let nameText = nameCell.textContent || nameCell.innerText;
            if (nameText.toLowerCase().startsWith(input)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}
function toggleMenu(menu) {
    const menuOptions = menu.querySelector('.menu-options');
    menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener("click", function (event) {
    document.querySelectorAll(".menu-options").forEach(menu => {
        if (!menu.parentElement.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        }
    },
    effect: 'slide',
    speed: 600,
});

let currentChatUser = null;

function openChat(user) {
    currentChatUser = user;
    document.getElementById('chat-header').innerText = "Chat with " + user;
    document.getElementById('chat-box').innerHTML = ''; // Clear chat box
}

function sendMessage() {
    if (!currentChatUser) {
        alert("Select a user first!");
        return;
    }

    let messageInput = document.getElementById("message");
    let messageText = messageInput.value.trim();

    if (messageText === "") return;

    let chatBox = document.getElementById("chat-box");

    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "sent");
    messageDiv.innerText = messageText;
    chatBox.appendChild(messageDiv);

    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function togglePassword(inputId) {
    var input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
}

function savePassword() {
    alert("Password saved successfully!");
}

function showResetForm() {
    document.getElementById('signInContainer').classList.add('hidden');
    document.getElementById('resetContainer').classList.remove('hidden');
}

function showSignUpForm() {
    document.getElementById('signInContainer').classList.add('hidden');
    document.getElementById('signUpContainer').classList.remove('hidden');
}

function goBackToSignIn() {
    document.getElementById('resetContainer').classList.add('hidden');
    document.getElementById('signUpContainer').classList.add('hidden');
    document.getElementById('signInContainer').classList.remove('hidden');
}

function signIn() {
    window.location.href="index.html"
}

function terms(){
    window.location.href="terms.html"
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function countdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 98);
    
    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateTimer, 1000);
}

countdown();

function subscribe() {
    const email = document.getElementById("email").value;
    const subscribeButton = document.getElementById("subscribeButton");

    if (email) {
        subscribeButton.textContent = "Subscribed!";
        subscribeButton.disabled = true; 
        subscribeButton.style.backgroundColor = "black"; 
    
    } else {
        alert("Please enter a valid email address.");
    }
}

function togglelock(id) {
    let input = document.getElementById(id);
    let icon = input.nextElementSibling.querySelector("i");
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
}

function unlock() {
    window.location.href="index.html"
}

function goHome() {
    window.location.href = "index.html"; 
}