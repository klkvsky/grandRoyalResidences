import LocomotiveScroll from 'locomotive-scroll';



const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    multiplier: 1,
    smooth: true,
    getDirection: true,
    repeat: true,
    getSpeed: true,
});



import 'swiper/swiper-bundle.css';

// core version + navigation, pagination modules:
import SwiperCore, {
    Navigation,
    Pagination
} from 'swiper/core';
import Swiper from 'swiper/bundle';


// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);




const mediaQuery = window.matchMedia('(min-width: 768px)')
const IpadmediaQuery = window.matchMedia('(min-width: 1200px)')

if (IpadmediaQuery.matches) {

    // init Swiper:
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 100,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

} else {

    if (mediaQuery.matches) {
        // init Swiper:
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 2,
            spaceBetween: 100,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } else {
        // init Swiper:
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            spaceBetween: 100,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }


    const swiper3 = new Swiper(".imagesmarquee", {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
        freeModeMomentum: false,
        speed: 40000,
        autoplay: {
            delay: 1000,
            // waitForTransition: false,
            reverseDirection: true,
        },
    });



    const swiper4 = new Swiper(".marquee__txt.first", {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
        freeModeMomentum: false,
        speed: 20000,
        autoplay: {
            delay: 2000,
            // waitForTransition: false,
            reverseDirection: true,
        },
    });

    const swiper5 = new Swiper(".marquee__txt.second", {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
        freeModeMomentum: false,
        speed: 40000,
        autoplay: {
            delay: 1000,
            // waitForTransition: false,
            reverseDirection: true,
        },
    });

}

const swiper2 = new Swiper(".mySwiper2", {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    nested: true
});



scroll.on('scroll', (instance) => {
    document.querySelector('nav').setAttribute('data-direction', instance.direction);
    navbarChange();
    bgChange();
    bgSliderChange();
    hideAlwaysOn();
});

// is-inview

const heroNav = document.querySelector('.hero')
const heroText = document.querySelector('.hero__text')
const regNav = document.querySelector('.nav')
const jumbo = document.querySelector('#jumbo1')
const grid = document.querySelector('#grid1')
const slider = document.querySelector('.slider')
const bottomButton = document.querySelector('.end__cont__cont__button')
const alwayson = document.querySelector('.alwayson')
// const openmapbutton = document.querySelector('#openmapbutton')
// const openmapbutton2 = document.querySelector('#openmapbutton2')
const backbuttonmap = document.querySelector('#backbuttonmap')
const backbuttonfeedback = document.querySelector('#backbuttonfeedback')
const map = document.querySelector('.popupmap')
const feedbackwindow = document.querySelector('.feedback')

const feedback1 = document.querySelector('.end__cont__cont')
const feedback2 = document.querySelector('.ft__left__call')
const feedback3 = document.querySelector('#feedback3')

const navCall = document.querySelector('#NavCallButton');
const navMap = document.querySelector('#NavMapButton');

const heroCall = document.querySelector('#HeroCallButton');
const heroMap = document.querySelector('#HeroMapButton');


const navBack = document.querySelector('#navback');
const bottomBack = document.querySelector('.backtotop');
bottomBack.addEventListener('click', backtoTop);
navBack.addEventListener('click', backtoTop);

function backtoTop(){
    scroll.scrollTo( 'top', {
        'offset': 0,
        'duration': 600,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': true
    } );
}

const heroArrow = document.querySelector('#arrow-big');
heroArrow.addEventListener('click', toSecondBlock);

function toSecondBlock(){
    scroll.scrollTo( '.jumbo', {
        'offset': 0,
        'duration': 600,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': true
    } );
}





function navbarChange() {
    if (heroNav.hasAttribute('data-scroll-section-inview')) {
        regNav.classList.add('toohigh')
    } else {
        regNav.classList.remove('toohigh')
    }
}


function bgChange() {
    if (heroText.classList.contains('is-inview')) {
        document.body.classList.remove('notWhite')
        document.body.classList.add('dark')
        bottomBack.classList.add('hide')
    } else {
        document.body.classList.add('notWhite')
        document.body.classList.remove('dark')
        bottomBack.classList.remove('hide')
    }
}


function hideAlwaysOn() {
    if (bottomButton.classList.contains('is-inview')) {
        alwayson.classList.add('hide')
    } else {
        alwayson.classList.remove('hide')
    }
}

function bgSliderChange() {
    if (slider.hasAttribute('data-scroll-section-inview')) {
        document.body.classList.add('pureWhite')
    } else {
        document.body.classList.remove('pureWhite')
    }
}


// Code To open Map
// openmapbutton.addEventListener('click', addclasstomap);
// openmapbutton2.addEventListener('click', addclasstomap);
navMap.addEventListener('click', addclasstomap);
heroMap.addEventListener('click', addclasstomap);

backbuttonmap.addEventListener('click', removeClassMap);

// 
function addclasstomap() {

    document.querySelector('.bgformap').classList.add('transitiontoblack')

    setTimeout(function () {
        map.classList.add('opened')
    }, 1000);
}

// 

function removeClassMap() {
    map.classList.remove('opened')
    setTimeout(function () {
        document.querySelector('.bgformap').classList.remove('transitiontoblack')
    }, 500);
}
// End of opem Map Code



// Code To open Feedback
alwayson.addEventListener('click', addclasstofeedback);
feedback1.addEventListener('click', addclasstofeedback);
feedback2.addEventListener('click', addclasstofeedback);
feedback3.addEventListener('click', addclasstofeedback);
navCall.addEventListener('click', addclasstofeedback);
heroCall.addEventListener('click', addclasstofeedback);

backbuttonfeedback.addEventListener('click', removeClassFeedback);

// 
function addclasstofeedback() {

    document.querySelector('.bgformap').classList.add('transitiontoblack')

    setTimeout(function () {
        feedbackwindow.classList.add('opened')
    }, 1000);
}

// 

function removeClassFeedback() {
    feedbackwindow.classList.remove('opened')
    setTimeout(function () {
        document.querySelector('.bgformap').classList.remove('transitiontoblack')
    }, 500);
}
// End of open Feedback Code



document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = '+7' + (x[2] ? '(' + x[2] : '') + (x[3] ? ')' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});