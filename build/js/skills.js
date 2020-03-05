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

document.addEventListener("DOMContentLoaded", () => {
    let skills = document.getElementById('skills'),
        frontendGroup = skills.querySelector('.frontend'),
        backendGroup = skills.querySelector('.backend'),
        otherGroup = skills.querySelector('.other');
    let frontendList = '',
        backendList = '',
        otherList = '';

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