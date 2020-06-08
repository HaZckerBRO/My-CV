window.onload = new function(){
	let documentLanguage = null;
	const wrapper = document.querySelector('.wrapper');
	const langChoiser = document.getElementById('languageChoiser');
	const langItems = langChoiser.querySelectorAll('.languages div');
	const flags = langChoiser.querySelector('.flags');
	const photo = document.querySelector('.photo');
	const contactsBtn = document.querySelector('#contactMe');
	const modal = document.getElementById('modal');
	const modalCloseBtn = document.getElementById('modal-close');
	const background = document.querySelector('#background');

	const part_1 = document.getElementById('part-1');
	const part_2 = document.getElementById('part-2');
	const part_3 = document.getElementById('part-3');


	let navigation = document.querySelector('.sidebar');
	let activeNav = navigation.querySelector('#active');
	navigation.addEventListener('click', evt => {
		let scroll = evt.target.dataset.scroll || evt.target.parentNode.dataset.scroll
		if (scroll) {
			wrapper.classList.remove('part1');
			wrapper.classList.remove('part2');
			wrapper.classList.remove('part3');
			wrapper.classList.add(scroll);

			activeNav.classList.remove('part1');
			activeNav.classList.remove('part2');
			activeNav.classList.remove('part3');
			activeNav.classList.add(scroll);
		}
	})


	Array.prototype.slice.call(langItems).forEach(item => {
		console.log(Array.prototype.slice.call(langItems));
		item.addEventListener('mouseenter', evt => {
			if (evt.target.dataset.languageChoiser === 'en') {
				flags.classList.remove('ru');
				flags.classList.add('en');
			} else if (evt.target.dataset.languageChoiser === 'ru') {
				flags.classList.remove('en');
				flags.classList.add('ru');
			}
		});
		item.addEventListener('click', evt => {
			let lang = evt.target.dataset.languageChoiser;
			if (lang){
				documentLanguage = lang;
				setTimeout(()=>{
					translateDocument(documentLanguage);
				}, 200)
			}
			wrapper.classList.remove('nanoscale');
		});
	})


	function translateDocument(lang){
		langChoiser.addEventListener('transitionend', () => {
			langChoiser.style.display = 'none';
		});
		langChoiser.classList.remove('showed');
		translatePart_1(lang);
		translatePart_2(lang);
		translatePart_3(lang);
		translateModal(lang);
	}


	function translatePart_1(lang){
		let greeting = part_1.querySelector('.hello h1'),
			name = part_1.querySelector('.name'),
			surname = part_1.querySelector('.surname'),
			aboutMeBlock = part_1.querySelector('.about-me'),
			startText = aboutMeBlock.querySelector('.start-text'),
			middleText = aboutMeBlock.querySelector('.middle-text p'),
			endText = aboutMeBlock.querySelector('.end-text'),
			endText_P =endText.querySelectorAll('p'),
			startText_P = startText.querySelectorAll('p');

		greeting.textContent = translate.part1.greeting[lang];
		name.textContent = translate.part1.name[lang];
		surname.textContent = translate.part1.surname[lang];

		let color = document.createElement('b');
		startText_P[0].textContent = translate.part1.aboutMe.startText[lang][0];
		color.textContent = translate.part1.aboutMe.startText[lang][1];
		startText_P[0].appendChild(color);
		startText_P[0].append( translate.part1.aboutMe.startText[lang][2] );
		startText_P[1].textContent = translate.part1.aboutMe.startText[lang][3];

		color = document.createElement('b');
		color.textContent = translate.part1.aboutMe.middleText[lang][1];
		middleText.textContent = translate.part1.aboutMe.middleText[lang][0];
		middleText.appendChild(color);

		color = endText.querySelector('b');
		color.textContent = translate.part1.aboutMe.endText[lang][2];
		let par_1 = document.createElement('p'); 
		let par_2 = document.createElement('p'); 
		par_1.textContent = translate.part1.aboutMe.endText[lang][0];
		par_2.textContent = translate.part1.aboutMe.endText[lang][1];
		par_2.append(color);
		endText.textContent = '';
		endText.append(par_1);
		endText.append(par_2);
	}

	function translatePart_2(lang){
		let skillsTitle = part_2.querySelector('.skills__title'),
			experienceBlock = part_2.querySelector('.other-knowledge--experience'),
			experienceTitle = experienceBlock.querySelector('.title'),
			experienceItems = experienceBlock.querySelectorAll('.item'),
			otherBlock = part_2.querySelector('.other-knowledge--other'),
			otherTitle = otherBlock.querySelector('.title'),
			experienceOther = otherBlock.querySelectorAll('.item');

		skillsTitle.textContent = translate.part2.title[lang];
		experienceTitle.textContent = translate.part2.title_experience[lang];
		otherTitle.textContent = translate.part2.title_other[lang];

		Array.prototype.slice.call(experienceOther).forEach((item, index) => {
			item.textContent = translate.part2.knowledge_items[lang][index];
		});
	}

	function translatePart_3(lang){
		const title = part_3.querySelector('#my-targets'),
			  titleNow = part_3.querySelector('.title--conditions'),
			  titlePortfolio = part_3.querySelector('.title--portfolio'),
			  targetsNowBlock = part_3.querySelector('.targets--now'),
			  targetsFutureBlock = part_3.querySelector('.targets--portfolio');

		title.textContent = translate.part3.title[lang];
		titleNow.textContent = translate.part3.title_now[lang];
		titlePortfolio.textContent = translate.part3.title_future[lang];
		contactsBtn.textContent = translate.part3.contacts_btn[lang];

		if (lang === 'en') 
		{
			targetsNowBlock.textContent = null;
			targetsNowBlock.insertAdjacentHTML('afterBegin', ` 
				<li class="item">Remote work</li>
				<li class="item">Full time</li>
				<li class="item">Design work</li>
				<li class="item">Partial employment</li>
			`);
		}
		else 
		{
			targetsNowBlock.textContent = null;
			targetsNowBlock.insertAdjacentHTML('afterBegin', ` 
				<li class="item">Удалённая работа</li>
				<li class="item">Полный рабочий день</li>
				<li class="item">Проектная работа</li>
				<li class="item">Частичная занятость</li>
			`);
		}
	}


	function translateModal(lang){
		let shortInfoBlock = document.querySelector('.short-info'),
			shortInfoTitle = shortInfoBlock.querySelector('.title'),
			experienceTitle = shortInfoBlock.querySelector('.my-skills--experience > .title'),
			otherTitle = shortInfoBlock.querySelector('.my-skills--other > .title'),
			contactsTitle = shortInfoBlock.querySelector('.short-info__footer > .title'),
			otherP = shortInfoBlock.querySelectorAll('.my-skills--other > p');

			shortInfoTitle.textContent = translate.part2.title[lang];
			experienceTitle.textContent = translate.part2.title_experience[lang];
			otherTitle.textContent = translate.part2.title_other[lang];

			Array.prototype.slice.call(otherP).forEach( (p, i) => {
				p.textContent = translate.part2.knowledge_items[lang][i];
			});
			contactsTitle.textContent = translate.part3.contacts_btn[lang];
	  		modalCloseBtn.textContent = translate.modal_close[lang];
	}


	function shortInfoHandler(){
		modal.classList.toggle('showed');
	}

	setTimeout(()=>{ background.classList.add('motion')}, 1000);

	background.addEventListener('transitionend', () => background.classList.toggle('motion'));

	photo.addEventListener('click', shortInfoHandler);
	contactsBtn.addEventListener('click', shortInfoHandler);
	modal.addEventListener('click', (evt) => {
	    let canBeClose = evt.target == modal && !evt.target.classList.contains('short-info') || evt.target == modalCloseBtn; 
	    if (canBeClose)
	    	shortInfoHandler();
	});



	const translate = {
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
			},
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
				en: [
					'Cross-browser layout',
					'Adaptive layout',
					'Rubber layout',
					'BEM naming',
					'English language (reading and writing)'
				],
				ru: [
					'Кроссбраузерная вёрстка',
					'Адаптивная вёрстка',
					'Резиновая вёрстка',
					'БЭМ нейминг',
					'Английский язык (чтение и письмо)'
				]
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
	}
}
