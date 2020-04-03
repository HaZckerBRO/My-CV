"use strict";

var bcg = document.querySelector('.bcg'),
    photo = document.querySelector('.photo'),
    hello = document.querySelector('.hello'),
    leftSidebar = document.querySelector('.left-sidebar'),
    aboutMe = document.querySelector('.about-me'),
    divs = aboutMe.querySelectorAll('div');
var part1 = document.getElementById('part-1');
var part2 = document.getElementById('part-2');
var part3 = document.getElementById('part-3');
var part2_blocks = document.querySelector('.skills__items');
var part3_blocks = part3.querySelector('.blocks');
var activeNav = document.getElementById('active');
var divCounter = 0;
var windowHeight = document.documentElement.clientHeight;
document.addEventListener("DOMContentLoaded", function () {
  part1.style.minHeight = windowHeight + "px";
  part2.style.minHeight = windowHeight + "px";
  part3.style.minHeight = windowHeight + "px";
  part2_blocks.style.minHeight = windowHeight / 1.5 + "px";
  part3_blocks.style.minHeight = windowHeight / 1.5 + "px";
  part2.style.opacity = 1;
  hello.className = 'hello slide-in-blurred-right';
  bcg.style.opacity = '1';
  leftSidebar.style.opacity = '1';
  photo.className = 'photo slide-in-blurred-left';
  setTimeout(function () {
    bcg.className = "bcg motion";
    setInterval(function () {
      bcg.classList.contains('motion') ? bcg.classList.remove('motion') : bcg.classList.add('motion');
    }, 50000);
  }, 3200);
});

var slowShowDiv = function slowShowDiv() {
  if (divCounter >= divs.length - 1) clearInterval(divTimer);
  divs[divCounter].className += ' on-own-position';
  divCounter++;
};

var divTimer = setInterval(slowShowDiv, 1000);

function initializeLevelSkill() {
  var levels = document.querySelectorAll('.level');

  for (var i = 0; i < levels.length; i++) {
    var item = levels[i].querySelector('.level-bar');
    var lvl = item.dataset.level;
    item.style.width = lvl + '%';
    var width = levels[i].style.width;
    changeWidthBar(item, width, lvl);
  }
}

function changeWidthBar(elem, width, lvl) {
  if (typeof width == "string") width = width.substring(0, width.length - 1);
  width = Number(width);
  var count = lvl / 40;
  width += count;

  if (width <= lvl) {
    elem.style.width = width + '%';
    elem.previousElementSibling.textContent = Math.round(width) + "%";
    return setTimeout(function () {
      changeWidthBar(elem, width, lvl);
    }, 25);
  }
}

window.addEventListener("scroll", function (evt) {
  if (window.pageYOffset >= 500 && document.doIt) {
    setTimeout(initializeLevelSkill, 250);
  }

  changeActiveNavPosition();
});

function changeActiveNavPosition() {
  windowHeight = document.documentElement.clientHeight;
  var mainContentHeight = document.querySelector('.main-content').offsetHeight;
  var navbarHeight = document.querySelector('.navigation').offsetHeight - 74;
  var maxScroll = mainContentHeight - windowHeight;
  var windowScrollProcent = window.pageYOffset / maxScroll * 100;
  var activeNavPos = navbarHeight * windowScrollProcent / 100;
  activeNav.style.top = "".concat(activeNavPos, "px");
}

var menuItems = document.querySelector('.navigation');
menuItems.addEventListener('click', function (evt) {
  evt.preventDefault();
  var part = evt.target.dataset.scroll || evt.target.parentNode.dataset.scroll;

  if (part) {
    var target = document.getElementById(part);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});