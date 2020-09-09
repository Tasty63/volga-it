const hamburger = document.querySelector('.header__menu-icon');
const popUp = document.querySelector('.header__pop-up');
const navItems = document.querySelectorAll('.nav-item');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        popUp.classList.add('active');
        popUp.classList.remove('hidden');
        navItems.forEach(item => {
            item.classList.add('active');
            item.classList.remove('hidden');
        });
    } else {
        popUp.classList.add('hidden');
        popUp.classList.remove('active');
        navItems.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('active');
        });
    }

});

// navItems.forEach(item => {
//     if (hamburger.classList.contains('active')) {
//         item.classList.add('active');
//         item.classList.remove('hidden');
//         popUp.classList.add('active');
//         popUp.classList.remove('hidden');
//     } else {
//         item.classList.add('hidden');
//         item.classList.remove('active');
//         popUp.classList.add('hidden');
//         popUp.classList.remove('active');
//     }
// });





$(document).ready(function () {

    $('.outer-wrapper').slick({
        arrows: false,
        infinite: false,
        speed: 4000, //~4000
    });

    $('.outer-wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        if (nextSlide === 1) {
            $('.header__logo').removeClass('visible');
            $('.header__logo').addClass('hidden');

            $('.header__logo_green').removeClass('hidden');
            $('.header__logo_green').addClass('visible');

            $('.main-screen').addClass('animated');
            $('.main-screen').removeClass('animated-reverse');
        } else if (nextSlide === 0) {
            $('.header__logo').removeClass('hidden');
            $('.header__logo').addClass('visible');

            $('.header__logo_green').removeClass('visible');
            $('.header__logo_green').addClass('hidden');

            $('.main-screen').removeClass('animated');
            $('.main-screen').addClass('animated-reverse');
        }
    });

    $('.outer-wrapper').on('wheel', function (event) {
        event.preventDefault();

        if (event.originalEvent.deltaY > 0) {
            $('.outer-wrapper').slick('slickNext');
        } else {
            $('.outer-wrapper').slick('slickPrev');
        }

    })
});