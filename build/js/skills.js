let skillsList = [
    {
        title: "HTML 5",
        percent: 90,
        imageSrc: "images/skills/HTML5.png",
        group: "Frontend",
        color: "white",
        bcgColor: "#F16529"
    },
    {
        title: "CSS3",
        percent: 90,
        imageSrc: "images/skills/CSS3.png",
        group: "Frontend",
        color: "white",
        bcgColor: "#168dc9"
    },
    {
        title: "JavaScript",
        percent: 70,
        imageSrc: "images/skills/JavaScript.png",
        group: "Frontend",
        color: "white",
        bcgColor: "#EB5E00"
    },
    {
        title: "ES6",
        percent: 80,
        imageSrc: "images/skills/ES6.png",
        group: "Frontend",
        color: "black",
        bcgColor: "yellow"
    },
    {
        title: "React",
        percent: 60,
        imageSrc: "images/skills/React.png",
        group: "Frontend",
        color: "#00DBFC",
        bcgColor: "#292929"
    },
    {
        title: "Python Django",
        percent: 30,
        imageSrc: "images/skills/Python.png",
        group: "Backend",
        color: "black",
        bcgColor: "#00C902"
    },
    {
        title: "GitHub",
        percent: 70,
        imageSrc: "images/skills/GitHub.png",
        group: "Instruments",
        color: "white",
        bcgColor: "#4B4B4B"
    },
    {
        title: "Gulp",
        percent: 70,
        imageSrc: "images/skills/Gulp.png",
        group: "Instruments",
        color: "white",
        bcgColor: "#F34945"
    },
    {
        title: "Sass",
        percent: 80,
        imageSrc: "images/skills/Sass.png",
        group: "Instruments",
        color: "white",
        bcgColor: "#CC6699"
    },
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

    for (let i = 0; i < skillsList.length; i++) {
        let itemGroup = skillsList[i].group;
        if (itemGroup == "Frontend") {
            let item = createItems(skillsList[i])
            frontendList += item
        } else if (itemGroup == "Backend") {
            let item = createItems(skillsList[i])
            backendList += item
        } else {
            let item = createItems(skillsList[i])
            otherList += item
        }
    }

    insertItemsToGroup(frontendGroup, frontendList);
    insertItemsToGroup(backendGroup, backendList);
    insertItemsToGroup(otherGroup, otherList);
    isSkillsCreated = true;

});

function createItems(obj) {
    let item = `
        <div class="skills__item">
            <img src="${obj.imageSrc}" alt="${obj.title}" class="image">
            <div class="skills__level-wrapper">
                <p class="level-title">${obj.title}</p>
                <div class="level">
                    <div class="percent" style="color: ${obj.color}"></div>
                    <div class="level-bar" style="background-color: ${obj.bcgColor};" data-level="${obj.percent}"></div>
                </div>
            </div>
        </div>
    `;
    return item
}

function insertItemsToGroup(group, items) {
    group.insertAdjacentHTML('afterbegin', items);
}

function showShortInfo() {
    shortInfo.classList.contains('flip-out-ver-right') ? shortInfo.classList = 'short-info' : shortInfo.classList = 'short-info';
    let content = '';
    let skillContent = '';
    let priceContent = '';
    let contactContent = '';

    skillContent = `
        <h3>Skills</h3>
        <div class="my-skills">
    `;

    for (let i=0; i<skillsList.length; i++){
        skillContent += `
            <div class="skill">
                <p class="title">${skillsList[i].title}</p>
                <p class="percent">${skillsList[i].percent}%</p>
            </div>
        `;
    }
    skillContent += "</div>"

    priceContent = `
        <div class="price">
            <h3>What I want</h3>
            <p>From <span class="dollar"><b>$1,100</b></span> per month</p>
            <p><b>40 hours</b> a week</p>
            <p>Also you can offer your work schedule</p>
            
        </div>
    `

    contactContent = `
        
        <footer class='short-info__footer'>
            <h3>Contacts</h3>
            <a href="mailto:bro171194@gmail.com">E-mail: <p class="link">bro171194@gmail.com</p></a>
            <a href="https://vk.com/br000000">Vkontakte: <p class="link">https://vk.com/br000000</p></a>
            <a href="https://www.facebook.com/BRO.SB.17">Facebook: <p class="link">https://www.facebook.com/BRO.SB.17</p> <p class="addition">(I rarely go there. Better write to the mail or VK)</p></a>
        </footer>
    `;

    content += skillContent;
    content += priceContent;
    content += contactContent;
    content += `<button type="button" id="modal-close">Close</button>`
    shortInfo.insertAdjacentHTML('afterbegin', content)

    let modalCloseBtn = document.getElementById('modal-close');

    modal.addEventListener('click', (evt)=>{
        let canBeClose = evt.target == modal && !evt.target.classList.contains('short-info') || evt.target == document.getElementById('modal-close');
        if (canBeClose){
            shortInfo.className += ' flip-out-ver-right';
            modal.classList.remove('scale-in-center')
            setTimeout(()=>{
                shortInfo.className = 'short-info';
                modal.style.display = 'none';

            }, 450)
        }
    })
}

showShortInfo();

document.querySelector('.photo').addEventListener('click', openModal);

function openModal() {
    modal.className = 'scale-in-center'
    modal.style.display = 'flex'
}


