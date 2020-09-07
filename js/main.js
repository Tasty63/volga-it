const logo = document.querySelectorAll('.header__logo-top path');
const hamburger = document.querySelector('.header__menu-icon');
const popUp = document.querySelector('.header__pop-up');
const navItems = document.querySelectorAll('.nav-item');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.forEach(item => {
        if (hamburger.classList.contains('active')) {
            item.classList.add('active');
            item.classList.remove('hidden');
            popUp.classList.add('active');
            popUp.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
            item.classList.remove('active');
            popUp.classList.add('hidden');
            popUp.classList.remove('active');
        }
    });
});