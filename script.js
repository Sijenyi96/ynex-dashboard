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