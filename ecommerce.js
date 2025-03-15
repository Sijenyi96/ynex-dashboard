document.addEventListener("DOMContentLoaded", function () {
    if (!window.ApexCharts) {
        console.error("ApexCharts library is missing.");
        return;
    }

    const chartElement = document.querySelector("#chart");
    if (!chartElement) {
        console.error("Chart container not found.");
        return;
    }

    const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                        "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dataValues = [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34];

    const colors = categories.map((_, index) => {
        if (index < 4) return "rgb(220, 204, 233)"; 
        if (index === 4) return "blueviolet";       
        return "rgb(222, 218, 218)";               
    });

    var options = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: "45%",
            },
        },
        series: [{
            name: "Total Orders",
            data: dataValues.map((value, index) => ({
                x: categories[index], 
                y: value, 
                fillColor: colors[index], 
            })),
        }],
        xaxis: {
            categories: categories,
            labels: { style: { fontSize: "12px" } },
        },
        yaxis: {
            min: 0,
            max: 150,
            tickAmount: 3,
            labels: { style: { fontSize: "12px" } },
        },
        dataLabels: { enabled: false },
        grid: { borderColor: "#f1f1f1" },
    };

    var chart = new ApexCharts(chartElement, options);
    chart.render();

    function toggleMenu() {
        const menuDropdown = document.querySelector(".menu-dropdown001");
        if (menuDropdown) {
            menuDropdown.style.display = menuDropdown.style.display === "block" ? "none" : "block";
        } else {
            console.error("Menu dropdown not found.");
        }
    }
    const menuIcon = document.querySelector(".menu-icon001");
    if (menuIcon) {
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleMenu();
        });
    } else {
        console.error("Menu icon not found.");
    }
    document.addEventListener("click", function (event) {
        const menuDropdown = document.querySelector(".menu-dropdown001");
        if (menuDropdown && !menuDropdown.contains(event.target) && !menuIcon.contains(event.target)) {
            menuDropdown.style.display = "none";
        }
    });
    window.downloadChart = function (type) {
        alert(`Downloading ${type.toUpperCase()} file...`);
    };
});









