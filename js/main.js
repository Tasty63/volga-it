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
    const screen2Leafs = document.querySelectorAll('.screen-2__leaf');
    const screen3Leafs = document.querySelectorAll('.screen-3__leaf');
    const screen5Leafs = document.querySelectorAll('.screen-5__leaf');
    const allLeafs = document.querySelectorAll('.leaf');

    const slider = $('.outer-wrapper');

    slider.slick({
        arrows: false,
        infinite: false,
        speed: 3000, //~4000

        // draggable: false,

        // touchThreshold: > 5,
        // touchMove: false,

    });


    slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

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


        //// leafs parallax /////

        if (currentSlide === 0 && nextSlide === 1) {
            screen2Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right_2'); // 0 -> 1 //
                leaf.classList.add('parallax-right-to-left');
            });
        } else if (currentSlide === 1 && nextSlide === 0) {
            screen2Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right'); // 1 -> 0 //
                leaf.classList.add('parallax-left-to-right_2');
            });
        }

        if (currentSlide === 1 && nextSlide === 2) {
            screen2Leafs.forEach(leaf => {

                leaf.classList.remove('parallax-left-to-right'); // 1 -> 2 //
                leaf.classList.remove('parallax-right-to-left');
                leaf.classList.add('parallax-right-to-left_2');
            });

            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right_2');
                leaf.classList.add('parallax-right-to-left');
            });

        } else if (currentSlide === 2 && nextSlide === 1) {

            screen2Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-right-to-left_2'); // 2 -> 1 //
                leaf.classList.add('parallax-left-to-right');
            });

            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right');
                leaf.classList.add('parallax-left-to-right_2');
            });
        }

        if (currentSlide === 2 && nextSlide === 3) {
            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right'); // 2 -> 3 //
                leaf.classList.remove('parallax-right-to-left');
                leaf.classList.add('parallax-right-to-left_2');
            });
        } else if (currentSlide === 3 && nextSlide === 2) {
            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-right-to-left_2'); // 3 -> 2 //
                leaf.classList.add('parallax-left-to-right');
            });
        }

        if (currentSlide === 3 && nextSlide === 4) {
            screen5Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right_2'); // 4 -> 5 //
                leaf.classList.add('parallax-right-to-left');
            });
        } else if (currentSlide === 4 && nextSlide === 3) {
            screen5Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right'); // 5 -> 4 //
                leaf.classList.add('parallax-left-to-right_2');
            });
        }

    });

    slider.on('wheel', function (event) {
        event.preventDefault();

        if (event.originalEvent.deltaY > 0) {
            slider.slick('slickNext');
        } else {
            slider.slick('slickPrev');
        }

    })

    $('.header__logo-container').on('click', function () {
        allLeafs.forEach(leaf => {
            leaf.classList.remove('parallax-right-to-left');
            leaf.classList.remove('parallax-right-to-left_2');
            leaf.classList.remove('parallax-left-to-right');
            leaf.classList.remove('parallax-left-to-right_2');
        });
        slider.slick('slickGoTo', 0);
    })
});