let bcg = document.querySelector('.bcg');
let photo = document.querySelector('.photo');
let hello = document.querySelector('.hello');
let leftSidebar = document.querySelector('.left-sidebar');
let aboutMe = document.querySelector('.about-me')
let divs = aboutMe.querySelectorAll('div');
var divCounter = 0;


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(()=>{
        bcg.classList.remove('invisible');
        hello.classList.remove('invisible');

        hello.classList.add('slide-in-blurred-right');
        bcg.style.opacity = '1';
        leftSidebar.style.opacity = '1';
    }, 0)
    
    setTimeout(()=>{
        photo.classList.remove('invisible');
        photo.classList.add('slide-in-blurred-left');
    }, 500)

    setTimeout(()=>{
        bcg.classList.add('motion');
        setInterval(()=>{
            bcg.classList.contains('motion') ? bcg.classList.remove('motion') : bcg.classList.add('motion');
        }, 50000)
    }, 2000)
});

let slowShowDiv = function() {
    console.log('fucn')
    if (divCounter >= divs.length-1)
        clearInterval(divTimer)
    divs[divCounter].classList.add('on-own-position');
    divCounter++
}

var divTimer = setInterval(slowShowDiv, 1000);

