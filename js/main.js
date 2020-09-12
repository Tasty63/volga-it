const hamburger = document.querySelector('.header__menu-icon');
const popUp = document.querySelector('.header__pop-up');
const navItems = document.querySelectorAll('.nav-item');

const screen2Leafs = document.querySelectorAll('.screen-2__leaf');
const screen3Leafs = document.querySelectorAll('.screen-3__leaf');
const screen5Leafs = document.querySelectorAll('.screen-5__leaf');
const allLeafs = document.querySelectorAll('.leaf');

const title1 = document.querySelector('.screen-2__title');
const subtitle1 = document.querySelector('.screen-2__subtitle');
const title2 = document.querySelector('.screen-3__title');
const subtitle2 = document.querySelector('.screen-3__subtitle');
const video = document.querySelector('.video');
const iconPlay = document.querySelector('.icon-play');
const packages = document.querySelector('.packages');
const title5 = document.querySelector('.screen-5__title');
const subtitel5 = document.querySelector('.screen-5__subtitle');
const button = document.querySelector('.screen-5__button');

const logo = document.querySelector('.header__logo');
const logoGreen = document.querySelector('.header__logo_green');
const mainScreen = document.querySelector('.main-screen');

const screen2ImgLeft = document.querySelector('.screen-2__img-left .img-left')
const screen2ImgRight = document.querySelector('.screen-2__img-right .img-right');
const screen3ImgLeft = document.querySelector('.screen-3__img-left .img-left');
const screen3ImgLeftFall = document.querySelector('.screen-3__img-left .img-left_fall')
const screen3ImgRight = document.querySelector('.screen-3__img-right .img-right');
const videoPreview = document.querySelector('.video-preview');

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

$(document).ready(function () {

    const slider = $('.outer-wrapper');

    slider.slick({
        arrows: false,
        infinite: false,
        speed: 3000,
        draggable: false,
    });

    function toggleItemsAnimation(currentSlide, nextSlide) {
        if (currentSlide === 0 && nextSlide === 1) { // 1 -> 2 //

            title1.classList.remove('parallax-right-to-left_2');
            subtitle1.classList.remove('parallax-right-to-left_2');

            title1.classList.add('parallax-right-to-left');
            subtitle1.classList.add('parallax-right-to-left');

        } else if (currentSlide === 1 && nextSlide === 0) { // 2 -> 1 //

            title1.classList.remove('parallax-right-to-left');
            subtitle1.classList.remove('parallax-right-to-left');
        }

        if (currentSlide === 1 && nextSlide === 2) { // 2 -> 3 //

            title1.classList.remove('parallax-right-to-left');
            subtitle1.classList.remove('parallax-right-to-left');

            title1.classList.add('parallax-right-to-left_2');
            subtitle1.classList.add('parallax-right-to-left_2');

            title2.classList.add('parallax-right-to-left');
            subtitle2.classList.add('parallax-right-to-left');

        } else if (currentSlide === 2 && nextSlide === 1) { // 3 -> 2 //
            title1.classList.remove('parallax-right-to-left_2');
            subtitle1.classList.remove('parallax-right-to-left_2');
        }

        if (currentSlide === 2 && nextSlide === 3) { // 3 -> 4 //

            title2.classList.remove('parallax-right-to-left');
            subtitle2.classList.remove('parallax-right-to-left');

            title2.classList.add('parallax-right-to-left_2');
            subtitle2.classList.add('parallax-right-to-left_2');

            video.classList.add('move');
            iconPlay.classList.add('move');

        } else if (currentSlide === 3 && nextSlide === 2) { // 4 -> 3 //
            title2.classList.remove('parallax-right-to-left_2');
            subtitle2.classList.remove('parallax-right-to-left_2');
        }

        if (currentSlide === 3 && nextSlide === 4) { // 4 -> 5 //
            packages.classList.add('parallax-right-to-left');
            title5.classList.add('parallax-right-to-left');
            subtitel5.classList.add('parallax-right-to-left');
            button.classList.add('parallax-right-to-left');
        } else if (currentSlide === 4) { // 5 -> 4 //
            packages.classList.remove('parallax-right-to-left');
            title5.classList.remove('parallax-right-to-left');
            subtitel5.classList.remove('parallax-right-to-left');
            button.classList.remove('parallax-right-to-left');
        }

    }

    function toggleParallaxLeafs(currentSlide, nextSlide) {
        if (currentSlide === 0 && nextSlide === 1) { // 0 -> 1 //

            screen2Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right_2');
                leaf.classList.add('parallax-right-to-left');
            });

        } else if (currentSlide === 1 && nextSlide === 0) { // 1 -> 0 //

            screen2Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right');
                leaf.classList.remove('parallax-right-to-left');
                leaf.classList.add('parallax-left-to-right_2');
            });
        }

        if (currentSlide === 1 && nextSlide === 2) { // 1 -> 2 //

            screen2Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right');
                leaf.classList.remove('parallax-right-to-left');
                leaf.classList.add('parallax-right-to-left_2');
            });

            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right_2');
                leaf.classList.add('parallax-right-to-left');
            });

        } else if (currentSlide === 2 && nextSlide === 1) { // 2 -> 1 //

            screen2Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-right-to-left_2');
                leaf.classList.add('parallax-left-to-right');
            });

            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right');
                leaf.classList.add('parallax-left-to-right_2');
            });
        }

        if (currentSlide === 2 && nextSlide === 3) { // 2 -> 3 //
            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right');
                leaf.classList.remove('parallax-right-to-left');
                leaf.classList.add('parallax-right-to-left_2');
            });
        } else if (currentSlide === 3 && nextSlide === 2) { // 3 -> 2 //
            screen3Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-right-to-left_2');
                leaf.classList.add('parallax-left-to-right');
            });
        }

        if (currentSlide === 3 && nextSlide === 4) { // 4 -> 5 //
            screen5Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right_2');
                leaf.classList.add('parallax-right-to-left');
            });
        } else if (currentSlide === 4 && nextSlide === 3) { // 5 -> 4 //
            screen5Leafs.forEach(leaf => {
                leaf.classList.remove('parallax-left-to-right');
                leaf.classList.add('parallax-left-to-right_2');
            });
        }
    }

    function toggleOtherAmimations(currentSlide, nextSlide) {

        if (nextSlide === 0) {

            logo.classList.remove('hidden');
            logo.classList.add('visible');

            logoGreen.classList.remove('visible');
            logoGreen.classList.add('hidden');

            mainScreen.classList.remove('animated');
            mainScreen.classList.add('animated-reverse');
        }
        if (nextSlide === 1) {

            logo.classList.remove('visible');
            logo.classList.add('hidden');

            logoGreen.classList.remove('hidden');
            logoGreen.classList.add('visible');

            mainScreen.classList.add('animated');
            mainScreen.classList.remove('animated-reverse');
        }
        if (nextSlide === 2) {
            screen3ImgLeftFall.classList.add('changing');

            screen2ImgLeft.classList.add('imgScaled');
            screen2ImgRight.classList.add('imgScaled');
        }
        if (currentSlide === 2) {
            screen2ImgLeft.classList.remove('imgScaled');
            screen2ImgRight.classList.remove('imgScaled');
        }
        if (nextSlide === 3) {

            screen3ImgLeftFall.classList.add('imgScaled');
            screen3ImgRight.classList.add('imgScaled');
        }
        if (currentSlide === 3) {
            screen3ImgLeftFall.classList.remove('imgScaled');
            screen3ImgRight.classList.remove('imgScaled');
        }
        if (nextSlide === 4) {
            videoPreview.classList.add('imgScaled');
        }
        if (currentSlide === 4) {
            videoPreview.classList.remove('imgScaled');
        }

    }

    slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        toggleParallaxLeafs(currentSlide, nextSlide);
        toggleItemsAnimation(currentSlide, nextSlide);
        toggleOtherAmimations(currentSlide, nextSlide)
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

        title2.classList.remove('parallax-right-to-left_2');
        subtitle2.classList.remove('parallax-right-to-left_2');

        slider.slick('slickGoTo', 0);
    })
});