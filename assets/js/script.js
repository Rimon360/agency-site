// elements height start

const headerSection = document.querySelector('.header-section');
headerSection.style.height = window.innerHeight + 'px';



// elements height end

// button bounce function;
var allTagLikeButton = document.querySelectorAll('.bounce--');
var x = 0,
    e;
for (; x < allTagLikeButton.length; x++) {
    allTagLikeButton[x].onmousedown = function () {
        this.style.transform = "scale(.9)";
        e = this;

    }
    window.onmouseup = function () {
        e ? e.style.transform = "scale(1)" : false;
    }

}
// Button bounce function end;


// Slider Script and Functions

const introContainer = document.querySelectorAll('.intro-container');
const imageContainers = document.querySelectorAll('.image-container');
// const headerLi = document.querySelector('header ul li');
const sliderButton = document.querySelectorAll('.slider-changine-buttons span');
var containerInArray = [];
var targeted = 0;
var removeAble = 3;

// Set the image slider image container height;
for (var x = 0; x < imageContainers.length; ++x) {
    imageContainers[x].style.height = window.innerHeight + 'px';
}

function slider(click) {

    removeAble -= 1;
    if (removeAble >= 0 && removeAble <= 3) {
        imageContainers[removeAble].classList.remove('container-active');
        introContainer[removeAble].classList.remove('content-active');
        sliderButton[removeAble].classList.remove('slider-button-active');
    };
    imageContainers[targeted].classList.add('container-active');
    introContainer[targeted].classList.add('content-active');
    sliderButton[targeted].classList.add('slider-button-active');
    targeted += 1;
    return targeted;
}
var removeAble;
var interval = setInterval(() => {
    sliderRun();
}, 5000);

// Slider Run funciton

function sliderRun(click) {

    targeted = click > -1 || click < 3 ? (function () {
        clearInterval(interval);
        return click;
    })() : targeted;
    removeAble = slider(false);
    if (removeAble > 2 || removeAble < 1) {
        targeted = 0;
    }
}
sliderButton[0].onclick = function () {
    sliderRun(0);
}
sliderButton[1].onclick = function () {
    sliderRun(1);
}
sliderButton[2].onclick = function () {
    sliderRun(2);
}

// Go to top of the page function ;
const backToTopButton = document.querySelector('.goTop');
window.onscroll = function () {
    goTop();
}

function goTop(e) {
    if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
        backToTopButton.classList.add('b-t-t-active')
    } else {
        backToTopButton.classList.remove('b-t-t-active')
    }
}
backToTopButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Go to top of the page function end;


// Faq Section Functions;
const allFaqElements = document.querySelectorAll('.faq-title');
const faqAllDescription = document.querySelectorAll('.faq-description');
const plusMinus = document.querySelectorAll('.faq-plus-minus');
var currentIndex = 0,
    index;
allFaqElements.onfocus = function () {
    console.log(this);
}
for (var x = 0; x < allFaqElements.length; ++x) {
    allFaqElements[x].onclick = function (e) {

        currentIndex = this.getAttribute('index');
        index = allFaqElements[0].getAttribute('index--s');
        if (index != currentIndex) {
            index ? (function () {
                faqAllDescription[index].classList.remove('height-full');
                plusMinus[index].innerHTML = '+';
            })() : false;

        }
        if (!faqAllDescription[currentIndex].classList.contains("height-full")) {
            faqAllDescription[currentIndex].classList.add('height-full');
            plusMinus[currentIndex].innerHTML = '-';
        } else {
            faqAllDescription[currentIndex].classList.remove('height-full');
            plusMinus[currentIndex].innerHTML = '+';
        }
        allFaqElements[0].setAttribute('index--s', currentIndex);
    }
}
// Go to gargeted section functions;

function go_targetd_section(e) {
    e = document.querySelector("." + e).getBoundingClientRect().top;
    document.body.scrollTop = e;
    document.documentElement.scrollTop = e;
}
const seeMore = document.querySelectorAll('.see-more');
for (var i = 0; i < seeMore.length; ++i) {
    seeMore[i].onclick = function () {
        go_targetd_section('services-title');
    }
}

// Show and hide menu bar
const menubarButton = document.querySelector('.menu-bar button');
const menuList = document.querySelector('header ul');
menuList.onclick = function (e) {
    e.stopPropagation();
}
menubarButton.onclick = function (e) {
    if (menuList.classList.contains('menu-active')) {
        menuList.classList.remove('menu-active');

    } else {
        menuList.classList.add('menu-active');
    }
    e.stopPropagation();
}
window.onclick = function () {
    menuList.classList.remove('menu-active');
}