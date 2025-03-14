document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("doughnutChart").getContext("2d");

    new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [{
                data: [1624, 1267, 1153, 679],
                backgroundColor: ["blueviolet", "blue", "orange", "green"],
                hoverBackgroundColor: ["black", "black", "black", "black"],
                hoverBorderColor: ["blueviolet", "blue", "orange", "green"]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            cutout: '80%', // Adds the cutout effect
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const seriesData = [32, 27, 25, 16];
                            return `Series-${tooltipItem.dataIndex + 1}: ${seriesData[tooltipItem.dataIndex]}`;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Hides the legend
                }
            }
        }
    });

    const menuBtn = document.querySelector(".menu-btn");
    const dropdown = document.querySelector(".menu-dropdown");

    menuBtn.addEventListener("click", function () {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
        if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
});


