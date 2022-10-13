

// CREATE VARIABLES FOR HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// ADD EVENT LISTENER TO HAMBURGER BUTTON
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));


// STICKY NAV 
const navBar = document.getElementById("navbar");

// ADD EVENT LISTENER FOR SCROLL
window.addEventListener("scroll", () => {
    navBar.classList.toggle("sticky", window.scrollY > 0);
});