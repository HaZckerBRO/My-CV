"use strict";

var documentLanguage = storageLang();

function storageLang(newLang) {
  if (newLang) {
    return window.localStorage.setItem('pageLang', newLang);
  }

  return window.localStorage.getItem('pageLang') || null;
}

var translate = {
  part1: {
    greeting: {
      en: 'Hello! My name is',
      ru: 'Привет! Меня зовут'
    },
    name: {
      en: 'Rodion',
      ru: 'Родион'
    },
    surname: {
      en: 'Boyko',
      ru: 'Бойко'
    },
    aboutMe: {
      startText: {
        en: ['I am a', ' Frontend ', 'Developer', 'Ready for work and interesting projects'],
        ru: ['Я', ' Frontend ', 'Разработчик', 'Готов к работе, и/или интересным проектам']
      },
      middleText: {
        en: ['To quickly view a short information, ', 'click on the photo'],
        ru: ['Для просмотра краткой информации', ' кликните на фото']
      },
      endText: {
        en: ['Or scroll further,', ' and perhaps ', 'we will cooperate'],
        ru: ['Или смотрите страницу полностью', ' и возможно ', 'мы будем сотрудничать']
      }
    }
  },
  part2: {
    title: {
      en: 'My skills',
      ru: 'Мои навыки'
    },
    title_experience: {
      en: 'Have experience',
      ru: 'Есть опыт'
    },
    title_other: {
      en: 'Other skill',
      ru: 'Другие навыки'
    },
    knowledge_items: {
      en: ['Cross-browser layout', 'Adaptive layout', 'Rubber layout', 'BEM naming', 'English language (reading and writing)'],
      ru: ['Кроссбраузерная вёрстка', 'Адаптивная вёрстка', 'Резиновая вёрстка', 'БЭМ нейминг', 'Английский язык (чтение и письмо)']
    }
  },
  part3: {
    title: {
      en: 'Portfolio',
      ru: 'Портфолио'
    },
    title_now: {
      en: 'Wish',
      ru: 'Пожелания'
    },
    title_future: {
      en: 'Portfolio',
      ru: 'Портфолио'
    },
    contacts_btn: {
      en: 'contacts',
      ru: 'контакты'
    }
  },
  modal_close: {
    en: 'close',
    ru: 'закрыть'
  }
};
window.onload = new function () {
  var wrapper = document.querySelector('.wrapper');
  var langChoiser = document.getElementById('languageChoiser');
  var langItems = langChoiser.querySelectorAll('.languages div');
  var flags = langChoiser.querySelector('.flags');
  var photo = document.querySelector('.photo');
  var contactsBtn = document.querySelector('#contactMe');
  var modal = document.getElementById('modal');
  var modalCloseBtn = document.getElementById('modal-close');
  var background = document.querySelector('#background');
  var part_1 = document.getElementById('part-1');
  var part_2 = document.getElementById('part-2');
  var part_3 = document.getElementById('part-3'); // let navigation = document.querySelector('.sidebar');
  // let activeNav = navigation.querySelector('#active');
  // navigation.addEventListener('click', evt => {
  // 	let scroll = evt.target.dataset.scroll || evt.target.parentNode.dataset.scroll
  // 	if (scroll) {
  // 		wrapper.classList.remove('part1');
  // 		wrapper.classList.remove('part2');
  // 		wrapper.classList.remove('part3');
  // 		wrapper.classList.add(scroll);
  // 		activeNav.classList.remove('part1');
  // 		activeNav.classList.remove('part2');
  // 		activeNav.classList.remove('part3');
  // 		activeNav.classList.add(scroll);
  // 	}
  // })

  Array.prototype.slice.call(langItems).forEach(function (item) {
    item.addEventListener('mouseenter', function (evt) {
      if (evt.target.dataset.languageChoiser === 'en') {
        flags.classList.remove('ru');
        flags.classList.add('en');
      } else if (evt.target.dataset.languageChoiser === 'ru') {
        flags.classList.remove('en');
        flags.classList.add('ru');
      }
    });

    if (documentLanguage) {
      wrapper.classList.remove('nanoscale');
      hideLangChoiser();
      translateDocument(documentLanguage);
    } else {
      item.addEventListener('click', function (evt) {
        documentLanguage = evt.target.dataset.languageChoiser || storageLang();

        if (documentLanguage) {
          storageLang(documentLanguage);
          setTimeout(function () {
            translateDocument(documentLanguage);
          }, 200);
        }

        wrapper.classList.remove('nanoscale');
        hideLangChoiser();
      });
    }
  });

  function hideLangChoiser() {
    langChoiser.style.display = 'none';
    langChoiser.classList.remove('showed');
  }

  function translateDocument(lang) {
    langChoiser.addEventListener('transitionend', hideLangChoiser);
    translatePart_1(lang);
    translatePart_2(lang);
    translatePart_3(lang);
    translateModal(lang);
  }

  function translatePart_1(lang) {
    var greeting = part_1.querySelector('.hello h1'),
        name = part_1.querySelector('.name'),
        surname = part_1.querySelector('.surname'),
        aboutMeBlock = part_1.querySelector('.about-me'),
        startText = aboutMeBlock.querySelector('.start-text'),
        middleText = aboutMeBlock.querySelector('.middle-text p'),
        endText = aboutMeBlock.querySelector('.end-text'),
        endText_P = endText.querySelectorAll('p'),
        startText_P = startText.querySelectorAll('p');
    greeting.textContent = translate.part1.greeting[lang];
    name.textContent = translate.part1.name[lang];
    surname.textContent = translate.part1.surname[lang];
    var color = document.createElement('b');
    startText_P[0].textContent = translate.part1.aboutMe.startText[lang][0];
    color.textContent = translate.part1.aboutMe.startText[lang][1];
    startText_P[0].appendChild(color);
    startText_P[0].append(translate.part1.aboutMe.startText[lang][2]);
    startText_P[1].textContent = translate.part1.aboutMe.startText[lang][3];
    color = document.createElement('b');
    color.textContent = translate.part1.aboutMe.middleText[lang][1];
    middleText.textContent = translate.part1.aboutMe.middleText[lang][0];
    middleText.appendChild(color);
    color = endText.querySelector('b');
    color.textContent = translate.part1.aboutMe.endText[lang][2];
    var par_1 = document.createElement('p');
    var par_2 = document.createElement('p');
    par_1.textContent = translate.part1.aboutMe.endText[lang][0];
    par_2.textContent = translate.part1.aboutMe.endText[lang][1];
    par_2.append(color);
    endText.textContent = '';
    endText.append(par_1);
    endText.append(par_2);
  }

  function translatePart_2(lang) {
    var skillsTitle = part_2.querySelector('.skills__title'),
        experienceBlock = part_2.querySelector('.other-knowledge--experience'),
        experienceTitle = experienceBlock.querySelector('.title'),
        experienceItems = experienceBlock.querySelectorAll('.item'),
        otherBlock = part_2.querySelector('.other-knowledge--other'),
        otherTitle = otherBlock.querySelector('.title'),
        experienceOther = otherBlock.querySelectorAll('.item');
    skillsTitle.textContent = translate.part2.title[lang];
    experienceTitle.textContent = translate.part2.title_experience[lang];
    otherTitle.textContent = translate.part2.title_other[lang];
    Array.prototype.slice.call(experienceOther).forEach(function (item, index) {
      item.textContent = translate.part2.knowledge_items[lang][index];
    });
  }

  function translatePart_3(lang) {
    var title = part_3.querySelector('#my-targets'),
        titleNow = part_3.querySelector('.title--conditions'),
        titlePortfolio = part_3.querySelector('.title--portfolio'),
        targetsNowBlock = part_3.querySelector('.targets--now'),
        targetsFutureBlock = part_3.querySelector('.targets--portfolio');
    title.textContent = translate.part3.title[lang];
    titleNow.textContent = translate.part3.title_now[lang];
    titlePortfolio.textContent = translate.part3.title_future[lang];
    contactsBtn.textContent = translate.part3.contacts_btn[lang];

    if (lang === 'en') {
      targetsNowBlock.textContent = null;
      targetsNowBlock.insertAdjacentHTML('afterBegin', " \n\t\t\t\t<li class=\"item\">Remote work</li>\n\t\t\t\t<li class=\"item\">Full time</li>\n\t\t\t\t<li class=\"item\">Design work</li>\n\t\t\t\t<li class=\"item\">Partial employment</li>\n\t\t\t");
    } else {
      targetsNowBlock.textContent = null;
      targetsNowBlock.insertAdjacentHTML('afterBegin', " \n\t\t\t\t<li class=\"item\">\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430</li>\n\t\t\t\t<li class=\"item\">\u041F\u043E\u043B\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C</li>\n\t\t\t\t<li class=\"item\">\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430</li>\n\t\t\t\t<li class=\"item\">\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u044C</li>\n\t\t\t");
    }
  }

  function translateModal(lang) {
    var shortInfoBlock = document.querySelector('.short-info');
    var shortInfoTitle = shortInfoBlock.querySelector('.title');
    var experienceTitle = shortInfoBlock.querySelector('.my-skills--experience > .title');
    var otherTitle = shortInfoBlock.querySelector('.my-skills--other > .title');
    var contactsTitle = shortInfoBlock.querySelector('.short-info__footer > .title');
    var otherP = shortInfoBlock.querySelectorAll('.my-skills--other > p');
    shortInfoTitle.textContent = translate.part2.title[lang];
    experienceTitle.textContent = translate.part2.title_experience[lang];
    otherTitle.textContent = translate.part2.title_other[lang];
    Array.prototype.slice.call(otherP).forEach(function (p, i) {
      p.textContent = translate.part2.knowledge_items[lang][i];
    });
    contactsTitle.textContent = translate.part3.contacts_btn[lang];
    modalCloseBtn.textContent = translate.modal_close[lang];
  }

  function shortInfoHandler() {
    modal.classList.toggle('showed');
  }

  setTimeout(function () {
    background.classList.add('motion');
  }, 1000);
  background.addEventListener('transitionend', function () {
    return background.classList.toggle('motion');
  });
  photo.addEventListener('click', shortInfoHandler);
  contactsBtn.addEventListener('click', shortInfoHandler);
  modal.addEventListener('click', function (evt) {
    var canBeClose = evt.target == modal && !evt.target.classList.contains('short-info') || evt.target == modalCloseBtn;
    if (canBeClose) shortInfoHandler();
  });
}();