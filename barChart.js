 function toggleOptions() {
            document.getElementById("options-menu").classList.toggle("show");
        }

    
const ctx = document.getElementById('profitChart').getContext('2d');
const profitChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
            {
                data: [44, 42, 57, 86, 58, 55, 70],
                backgroundColor: 'rgba(153, 102, 255, 0.6)'
            },
            {
                data: [34, 22, 37, 56, 21, 35, 60],
                backgroundColor: 'grey'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 100,
                ticks: {
                    stepSize: 50
                },
                grid: {
                    borderDash: [5, 5], // Broken border for rows
                    drawBorder: false
                }
            },
            x: {
                grid: {
                    display: false // No border for columns
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true // Show labels on hover
            },
            legend: {
                display: false // Remove legend below the header border
            }
        }
    }
});
