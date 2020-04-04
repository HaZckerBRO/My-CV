let skillsList = [
    { title: "HTML 5",          percent: 90,    imageSrc: "build/images/skills/HTML5.png",        group: "Frontend",      color: "#ffffff",   bcgColor: "#F16529"},
    { title: "CSS3",            percent: 90,    imageSrc: "build/images/skills/CSS3.png",         group: "Frontend",      color: "#ffffff",   bcgColor: "#168dc9"},
    { title: "JavaScript",      percent: 70,    imageSrc: "build/images/skills/JavaScript.png",   group: "Frontend",      color: "#ffffff",   bcgColor: "#EB5E00"},
    { title: "ES6",             percent: 80,    imageSrc: "build/images/skills/ES6.png",          group: "Frontend",      color: "#000000",   bcgColor: "#FFFF00"},
    { title: "React",           percent: 55,    imageSrc: "build/images/skills/React.png",        group: "Frontend",      color: "#00DBFC",   bcgColor: "#292929"},
    { title: "Python Django",   percent: 35,    imageSrc: "build/images/skills/Python.png",       group: "Backend",       color: "#000000",   bcgColor: "#00C902"},
    { title: "Git",             percent: 55,    imageSrc: "build/images/skills/GitHub.png",       group: "Instruments",   color: "#ffffff",   bcgColor: "#4B4B4B"},
    { title: "Gulp",            percent: 70,    imageSrc: "build/images/skills/Gulp.png",         group: "Instruments",   color: "#ffffff",   bcgColor: "#F34945"},
    { title: "Sass",            percent: 80,    imageSrc: "build/images/skills/Sass.png",         group: "Instruments",   color: "#ffffff",   bcgColor: "#CC6699"},
];

let isSkillsCreated = false;
let frontendList = '',
    backendList = '',
    otherList = '';

let modal = document.getElementById('modal');
let shortInfo = modal.querySelector('.short-info');

document.addEventListener("DOMContentLoaded", () => {
    let skills = document.getElementById('skills'),
        frontendGroup = skills.querySelector('.frontend'),
        backendGroup = skills.querySelector('.backend'),
        otherGroup = skills.querySelector('.other');
    skillsList.forEach((skill) => {
        let itemGroup = skill.group;
        let item = null;

        switch (itemGroup) {
            case "Frontend":
                item = createItems(skill);
                frontendList += item;
                break;
            case "Backend":
                item = createItems(skill);
                backendList += item;
                break;
            default:
                item = createItems(skill);
                otherList += item;
        }
    });

    insertItemsToGroup(frontendGroup, frontendList);
    insertItemsToGroup(backendGroup, backendList);
    insertItemsToGroup(otherGroup, otherList);
    isSkillsCreated = true;

});

function createItems(obj) {
    const { imageSrc: image, title, color, bcgColor, percent } = obj;
    let item = `
        <div class="skills__item">
            <img src="${image}" alt="${title}" class="image">
            <div class="skills__level-wrapper">
                <p class="level-title">${title}</p>
                <div class="level">
                    <div class="percent" style="color: ${color}"></div>
                    <div class="level-bar" style="background-color: ${bcgColor};" data-level="${percent}"></div>
                </div>
            </div>
        </div>
    `;
    return item
}

function insertItemsToGroup(group, items) {
    group.insertAdjacentHTML('afterbegin', items);
}

// Modal short info
function showShortInfo() {
    shortInfo.classList.contains('flip-out-ver-right') ? shortInfo.classList = 'short-info' : shortInfo.classList = 'short-info';
    let content = '';
    let skillContent = `
        <h3>Skills</h3>
        <div class="my-skills">
    `;

    skillsList.map( elem => {
        skillContent += `
            <div class="skill">
                <p class="title">${elem.title}</p>
                <p class="percent">${elem.percent}%</p>
            </div>
        `;
    });


    skillContent += "</div>"

    let priceContent = `
        <div class="price">
            <h3>What I want</h3>
            <p>From <span class="dollar"><b>$1,200</b></span> a month (netto)</p>
            <p><b>40 hours</b> a week</p>
            <p>Also you can offer your work schedule</p>
            
        </div>
    `;

    let contactContent = `
        <footer class='short-info__footer'>
            <h3>Contacts</h3>
            <a href="mailto:bro171194@gmail.com" target="_blank">E-mail: <p class="link">bro171194@gmail.com</p></a>
            <a href="https://vk.com/br000000" target="_blank">Vkontakte: <p class="link">https://vk.com/br000000</p></a>
            <a href="https://t.me/HaZcker" target="_blank">Telegram: <p class="link">@HaZcker</p></a>
            <a href="https://www.facebook.com/BRO.SB.17" target="_blank">Facebook: <p class="link">https://www.facebook.com/BRO.SB.17</p> <p class="addition">(I rarely go there. Better write to the mail or VK)</p></a>
        </footer>
    `;

    content += skillContent;
    content += priceContent;
    content += contactContent;
    content += `<button type="button" id="modal-close">Close</button>`
    shortInfo.insertAdjacentHTML('afterbegin', content)

    let modalCloseBtn = document.getElementById('modal-close');

    // closing the modal window
    modal.addEventListener('click', (evt) => {
        let canBeClose = evt.target == modal && !evt.target.classList.contains('short-info') || evt.target == modalCloseBtn;
        if (canBeClose) {
            shortInfo.className += ' flip-out-ver-right';
            modal.classList.remove('scale-in-center');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                shortInfo.className = 'short-info';
                modal.style.display = 'none';

            }, 450)
        }
    });
}

showShortInfo();

document.querySelector('.photo').addEventListener('click', openModal);
document.getElementById('contactMe').addEventListener('click', openModal);

function openModal() {
    document.body.style.overflow = 'hidden';
    modal.className = 'scale-in-center'
    modal.style.display = 'flex'
}


