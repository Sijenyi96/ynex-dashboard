document.addEventListener("DOMContentLoaded", () => { const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        const chevron = item.querySelector(".chevron-icon i");
        const dropdown = item.querySelector(".dropdown-links");
    
        item.addEventListener("click", (event) => {
            event.stopPropagation(); 
            const isOpen = dropdown.style.display === "block";
    
            document.querySelectorAll(".dropdown-links").forEach(drop => {
                drop.style.display = "none";
            });
    
            document.querySelectorAll(".chevron-icon i").forEach(icon => {
                icon.classList.replace("bi-chevron-down", "bi-chevron-right");
            });
    
            if (!isOpen) {
                dropdown.style.display = "block";
                chevron.classList.replace("bi-chevron-right", "bi-chevron-down");
            }
        });
    });
    
    
    document.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-links").forEach(drop => {
            drop.style.display = "none";
        });
    
        document.querySelectorAll(".chevron-icon i").forEach(icon => {
            icon.classList.replace("bi-chevron-down", "bi-chevron-right");
        });
    });
    
    });
    
    
    


