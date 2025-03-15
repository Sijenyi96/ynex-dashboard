function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

const ctx = document.getElementById('nftChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Price',
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
                borderColor: 'blueviolet',
                fill: false,
                tension: 0.4,
                pointStyle: 'circle',
                pointRadius: 5
            },
            {
                label: 'Volume',
                data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
                borderColor: 'blue',
                borderDash: [5, 5],
                fill: false,
                tension: 0.4,
                pointStyle: 'circle',
                pointRadius: 5
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { 
              labels: {
                usePointStyle: true,
                pointStyle: 'circle'
            }
        
         }
        },
        scales: {
            y: { beginAtZero: true, min: 20, max: 100, title: { display: true } },
            x: { title: { display: true} }
        }
    }
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'slide',
    speed: 600,
});

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

function toggleDropdown() {
    const content = document.querySelector('.dropdown-content');
    const chevron = document.querySelector('.chevron');

    content.classList.toggle('show');
    chevron.classList.toggle('rotate');
}


