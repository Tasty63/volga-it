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





$(document).ready(function () {

    $('.outer-wrapper').slick({
        arrows: false,
        infinite: false,
        speed: 1800,
    });

    $('.outer-wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        if (nextSlide === 1) {
            $('.header__logo').removeClass('visible');
            $('.header__logo_green').addClass('visible');
            $('.header__logo').addClass('hidden');
            $('.header__logo_green').removeClass('hidden');
        } else if (nextSlide === 0) {
            $('.header__logo').addClass('visible');
            $('.header__logo_green').removeClass('visible');
            $('.header__logo').removeClass('hidden');
            $('.header__logo_green').addClass('hidden');
        }
    });
});