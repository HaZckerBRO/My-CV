let bcg = document.querySelector('.bcg'),
    photo = document.querySelector('.photo'),
    hello = document.querySelector('.hello'),
    leftSidebar = document.querySelector('.left-sidebar'),
    aboutMe = document.querySelector('.about-me'),
    divs = aboutMe.querySelectorAll('div');
let divCounter = 0;


document.addEventListener("DOMContentLoaded", () => {
    hello.className = 'hello slide-in-blurred-right';
    bcg.style.opacity = '1';
    leftSidebar.style.opacity = '1';
    photo.className = 'photo slide-in-blurred-left';

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

let skills = document.getElementById('skills'),
    levels = skills.querySelectorAll('.level');

for (let i=0; i<levels.length; i++){
    let lvlCounter = levels[i].querySelector('.level__counter');
    let level = lvlCounter.dataset.level
    let percent = 100-level

    lvlCounter.style.transform = `translateX(-${percent}%)`;
}

