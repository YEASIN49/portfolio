const hamburger = document.querySelector(".burgerpng");
const navMenu = document.querySelector(".sideMenu");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-btn-close");
	navMenu.classList.toggle("toggle-hidable-sideMenu");
});