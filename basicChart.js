document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('revenueChart');
    if (!canvas) {
        console.error("Canvas element #revenueChart not found!");
        return;
    }

    var ctx = canvas.getContext('2d');

    var revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Sales',
                    data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480],
                    borderColor: 'lightblue',
                    backgroundColor: 'rgba(173, 216, 230, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                    originalBorderColor: 'lightblue'
                },
                {
                    label: 'Revenue',
                    data: [180, 620, 476, 220, 520, 780, 435, 515, 738, 454, 525, 230],
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5],
                    originalBorderColor: 'blue'
                },
                {
                    label: 'Profit',
                    data: [100, 210, 180, 454, 230, 320, 656, 830, 350, 350, 210, 410],
                    borderColor: 'blueviolet',
                    backgroundColor: 'rgba(138, 43, 226, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                    originalBorderColor: 'blueviolet'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 1000,
                    ticks: {
                        stepSize: 200
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.2)',
                        borderDash: [5, 5]
                    }
                }
            }
        }
    });

    function getElement(id) {
        return document.getElementById(id);
    }

    function addButtonListener(id, callback) {
        const button = getElement(id);
        if (button) {
            button.addEventListener('click', callback);
        } else {
            console.warn(`Button #${id} not found`);
        }
    }

    addButtonListener('zoomIn', function () {
        if (revenueChart.options.scales.y.max > 200) {
            revenueChart.options.scales.y.max -= 200;
            revenueChart.update();
        }
    });

    addButtonListener('zoomOut', function () {
        revenueChart.options.scales.y.max += 200;
        revenueChart.update();
    });

    addButtonListener('changeColor', function () {
        revenueChart.data.datasets.forEach(dataset => {
            dataset.borderColor = dataset.borderColor === 'red' ? dataset.originalBorderColor : 'red';
        });
        revenueChart.update();
    });

    addButtonListener('resetChart', function () {
        revenueChart.options.scales.y.max = 1000;
        revenueChart.update();
    });

    addButtonListener('downloadPNG', function () {
        var a = document.createElement('a');
        a.href = revenueChart.toBase64Image();
        a.download = 'chart.png';
        a.click();
    });

    addButtonListener('downloadSVG', function () {
        alert('SVG download is not supported in Chart.js directly.');
    });

    addButtonListener('downloadCSV', function () {
        let csvContent = "data:text/csv;charset=utf-8,Month,Sales,Revenue,Profit\n";
        let labels = revenueChart.data.labels;
        let datasets = revenueChart.data.datasets;

        labels.forEach((label, index) => {
            csvContent += `${label},${datasets[0].data[index]},${datasets[1].data[index]},${datasets[2].data[index]}\n`;
        });

        let encodedUri = encodeURI(csvContent);
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "chart_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});

