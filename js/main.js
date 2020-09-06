const logo = document.querySelectorAll('.header__logo-top path');
const hamburger = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header__pop-up');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});





window.addEventListener('wheel', event => {

});