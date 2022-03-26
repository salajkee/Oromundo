// //hamburger menu 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__nav');
const navLink = navMenu.querySelectorAll('a');

hamburger.addEventListener('click', mobileMenu);

navLink.forEach(item => item.addEventListener('click', closeMenu));

function mobileMenu(e) {
    e.preventDefault();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.toggle('active');
    document.body.classList.remove('no-scroll');
}


// Smooth scroll and pageup

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top +"px"});
    return false;
});


// Plavnoe poyavlenie elementov

document.addEventListener('DOMContentLoaded', () => {

    const scrollItems = document.querySelectorAll('.documents__item');
    const operationItems = document.querySelectorAll('.operation__item');
    const helpInfoList = document.querySelectorAll('.help__info-list');

    const scrollOperationAnim = () => {
        let windowCenter = (window.innerHeight - 1000) + window.scrollY;
        operationItems.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight - 1000;
            if(windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };

    const scrollAnimations = () => {
        let windowCenter = (window.innerHeight - 1000) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight - 1000;
            if(windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };


    window.addEventListener('scroll', () => {
        scrollOperationAnim();
        scrollAnimations();
    });
});