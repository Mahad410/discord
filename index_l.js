const sideNav = document.querySelector(".sideNav");
const overlay = document.querySelector(".overlay");
const ham = document.querySelector(".ham");
const x = document.querySelector(".x");
ham.addEventListener("click", toggleHamburger);
x.addEventListener("click", toggleHamburger);
overlay.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    overlay.classList.toggle("showOverlay");
    sideNav.classList.toggle("showNav");
}
if (window.innerWidth <= '786') {
    ham_men.style.display = 'block';
} else {
    ham_men.style.display = 'none';
}
const ham_men = document.querySelector('.ham>svg');
const r_size = window.onresize = () => {
    if (window.innerWidth <= '786') {
        ham_men.style.display = 'block';
    } else {
        ham_men.style.display = 'none';
    }
}