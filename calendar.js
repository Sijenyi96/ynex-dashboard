let currentDate = new Date();
let currentView = 'month';

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const calendarView = document.getElementById("calendarView");
    calendarView.innerHTML = "";
    monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
   
    if (currentView === 'month') {
        renderMonthView(calendarView);
    } else if (currentView === 'week') {
        renderWeekView(calendarView);
    } else if (currentView === 'day') {
        renderDayView(calendarView);
    }
}

function renderMonthView(container) {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekdaysContainer = document.createElement("div");
    weekdaysContainer.classList.add("weekdays");
   
    weekdays.forEach(day => {
        const weekday = document.createElement("div");
        weekday.classList.add("weekday");
        weekday.textContent = day;
        weekdaysContainer.appendChild(weekday);
    });
    container.appendChild(weekdaysContainer);
   
    const daysContainer = document.createElement("div");
    daysContainer.classList.add("days");
   
    let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
   
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        emptyDay.style.background = "transparent";
        emptyDay.style.cursor = "default";
        daysContainer.appendChild(emptyDay);
    }
   
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;
        day.addEventListener("click", function () {
            const eventTitle = prompt("Please enter a new title for your event:");
            if (eventTitle) {
                alert("Event added: " + eventTitle);
            }
        });
        daysContainer.appendChild(day);
    }
    container.appendChild(daysContainer);
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

function goToToday() {
    currentDate = new Date();
    renderCalendar();
}

function toggleView(view) {
    currentView = view;
    renderCalendar();
}

document.addEventListener("DOMContentLoaded", renderCalendar);