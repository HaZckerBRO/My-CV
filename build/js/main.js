let bcg = document.querySelector('.bcg'),
    photo = document.querySelector('.photo'),
    hello = document.querySelector('.hello'),
    leftSidebar = document.querySelector('.left-sidebar'),
    aboutMe = document.querySelector('.about-me'),
    divs = aboutMe.querySelectorAll('div');
let divCounter = 0;


document.addEventListener("DOMContentLoaded", () => {
    // setTimeout(()=>{
        hello.className = 'hello slide-in-blurred-right';
        bcg.style.opacity = '1';
        leftSidebar.style.opacity = '1';
    // }, 0)
    
    // setTimeout(()=>{
        photo.className = 'photo slide-in-blurred-left';
    // }, 1000)

    setTimeout(()=>{
        bcg.className = "bcg motion";
        setInterval(()=>{
            bcg.classList.contains('motion') ? bcg.classList.remove('motion') : bcg.classList.add('motion');
        }, 50000)
    }, 3000)
});

let slowShowDiv = function() {
    if (divCounter >= divs.length-1)
        clearInterval(divTimer)
    divs[divCounter].className += ' on-own-position';
    divCounter++
}

let divTimer = setInterval(slowShowDiv, 1000);

