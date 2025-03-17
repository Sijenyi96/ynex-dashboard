document.addEventListener("DOMContentLoaded", function () { 
    const images = [ 
        { background: "url('images/media-51.jpg')", caption: "The agency has a diverse workforce of just under 18,000 civil servants,and works with many more U.S", title: "N.A.S.A", profile: "images/12.jpg", name: "Jyson Taylor-30,Dec 2022 - 11:50AM" }, 
        { background: "url('images/media-54.jpg')", caption: "NASA Nelson served in the U.S Senate for 18 years from Florida space shuttle mission 61-c in 1986.", title: "NASA Leadership", profile: "images/13.jpg", name: "Elisha Keens-24,Dec 2022 - 10:25PM" }, 
        { background: "url('images/media-56.jpg')", caption: "NASA is committed to providing all categories of businesses in both NASA prime contracts and subcontracts", title: "NASA Business", profile: "images/14.jpg", name: "Melissah Blue-16,Dec 2022 - 12:06AM" } 
    ];

let index = 0;
const container = document.querySelector(".outer-container");
const caption = document.getElementById("caption");
const title = document.getElementById("title");
const profile = document.getElementById("profile");
const imageName = document.getElementById("image-name");

function changeBackground() {
    container.style.backgroundImage = images[index].background;
    caption.textContent = images[index].caption;
    title.textContent = images[index].title;
    profile.src = images[index].profile;
    imageName.textContent = images[index].name;
    
    index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 3000);

});


