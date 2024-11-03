const openMenu = document.querySelector('.ri-menu-3-line');
const closeMenu = document.querySelector('.ri-close-large-line');
const modalMenu = document.querySelector('.menu');
const closerArea = document.querySelector('.closerArea');
// ==========================================================
const functionOpenMenu = () => {
    modalMenu.style.top = "0%";
    closerArea.style.animation = "animeCool 1s ease-in-out";
}
const functionCloseMenu = () => {
    modalMenu.style.top = "-100vh";
    closerArea.style.animation = "none";
}

openMenu.addEventListener('click', functionOpenMenu);
closeMenu.addEventListener('click', functionCloseMenu);
closerArea.addEventListener('click', functionCloseMenu);
// ==========================================================
let elementMenu = document.querySelectorAll('.objectMenu');
elementMenu.forEach(element => {
    element.addEventListener('click', functionCloseMenu);
});