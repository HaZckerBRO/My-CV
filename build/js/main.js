const bcg = document.querySelector('.bcg'),
    photo = document.querySelector('.photo'),
    hello = document.querySelector('.hello'),
    leftSidebar = document.querySelector('.left-sidebar'),
    aboutMe = document.querySelector('.about-me'),
    divs = aboutMe.querySelectorAll('div');
const part1 = document.getElementById('part-1')
const part2 = document.getElementById('part-2')
let divCounter = 0;
let windowHeight = document.documentElement.clientHeight;
document.doIt = true

document.addEventListener("DOMContentLoaded", () => {
    part1.style.minHeight = windowHeight+"px";
    part2.style.minHeight = windowHeight+"px";
    part2.style.opacity = 1;
    hello.className = 'hello slide-in-blurred-right';
    bcg.style.opacity = '1';
    leftSidebar.style.opacity = '1';
    photo.className = 'photo slide-in-blurred-left';

    setTimeout(() => {
        bcg.className = "bcg motion";
        setInterval(() => {
            bcg.classList.contains('motion') ? bcg.classList.remove('motion') : bcg.classList.add('motion');
        }, 50000)
    }, 3200);
});

let slowShowDiv = function () {
    if (divCounter >= divs.length - 1)
        clearInterval(divTimer)
    divs[divCounter].className += ' on-own-position';
    divCounter++
}

let divTimer = setInterval(slowShowDiv, 1000);

let skills = document.getElementById('skills');

function addFunction() {
    document.doIt = false;
    let levels = document.querySelectorAll('.level');
    for (let i = 0; i < levels.length; i++) {
        let item = levels[i].querySelector('.level-bar');
        let lvl = item.dataset.level;
        item.style.width = lvl + '%';
        let width = levels[i].style.width;
        changeWidthBar(item, width, lvl)
    }
}

function changeWidthBar(elem, width, lvl) {
    if (typeof (width) == "string")
        width = (width.substring(0, width.length - 1));
    width = Number(width);
    let count = lvl / 40;
    width += count;

    if (width <= lvl) {
        elem.style.width = width + '%';
        elem.previousElementSibling.textContent = Math.round(width) + "%"
        return setTimeout(() => {
            changeWidthBar(elem, width, lvl)
        }, 25)
    }
}

window.addEventListener("scroll", (evt)=>{
    if (window.pageYOffset >= 500 && document.doIt) {
        document.doIt = false;
        setTimeout(addFunction, 250);
    }
})

