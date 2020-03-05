let skillsList = [
    {
        title: "HTML 5",
        percent: 90,
        imageSrc: "images/skills/HTML5.png",
        group: "Frontend",
        color: "gold"
    },
    {
        title: "CSS3",
        percent: 90,
        imageSrc: "images/skills/CSS3.png",
        group: "Frontend",
        color: "gold"
    },
    {
        title: "JavaScript",
        percent: 90,
        imageSrc: "images/skills/JavaScript.png",
        group: "Frontend",
        color: "gold"
    },
    {
        title: "ES6",
        percent: 90,
        imageSrc: "images/skills/ES6.png",
        group: "Frontend",
        color: "gold"
    },
    {
        title: "React",
        percent: 90,
        imageSrc: "images/skills/React.png",
        group: "Frontend",
        color: "gold"
    },
    {
        title: "Python Django",
        percent: 90,
        imageSrc: "images/skills/Python.png",
        group: "Backend",
        color: "gold"
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

    for (let i=0; i<skillsList.length; i++){
        let itemGroup = skillsList[i].group;
        if ( itemGroup == "Frontend"){
           let item = createItems(skillsList[i])
           frontendList += item
        }else if (itemGroup == "Backend"){
            let item = createItems(skillsList[i])
            backendList += item
        }else{
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
                    <div class="percent">${obj.percent}</div>
                    <div class="level-bar" data-color="${obj.color}"></div>
                </div>
            </div>
        </div>
    `;
    return item
}

function insertItemsToGroup(group, items) {
    group.insertAdjacentHTML('afterbegin', items);
}