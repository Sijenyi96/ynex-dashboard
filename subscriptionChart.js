document.querySelector('.dropdown').addEventListener('click', function(event) {
    let dropdownContent = this.querySelector('.dropdown-content');  
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';  
    
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    let dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent && dropdownContent.style.display === 'block' && !event.target.closest('.dropdown')) {
        dropdownContent.style.display = 'none';
    }
});



const ctx = document.getElementById('subscriptionChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        datasets: [
            {
                label: "Basic",
                data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53],
                borderColor: "blueviolet",
                fill: true,
                tension: 0.4
            },
            {
                label: "Pro",
                data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82],
                borderColor: "blue",
                fill: true,
                tension: 0.4
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
            y: { beginAtZero: true, min: 0, max: 100,
                ticks: {
                    stepSize: 10,
                    padding: 2
                }
             },
            x: { grid: { display: false } }
        }
    }
});



 
