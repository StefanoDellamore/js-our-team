const membersTeam = [
    createNewProfile('Wayne Barnett', 'Founder & CEO', 'img/wayne-barnett-founder-ceo.jpg'),
    createNewProfile('Angela Caroll', 'Chief Editor', 'img/angela-caroll-chief-editor.jpg'),
    createNewProfile('Walter Gordon', 'Office Manager', 'img/walter-gordon-office-manager.jpg'),
    createNewProfile('Angela Lopez', 'Social Media Manager','img/angela-lopez-social-media-manager.jpg'),
    createNewProfile('Scott Estrada', 'Developer', 'img/scott-estrada-developer.jpg'),
    createNewProfile('Barbara Ramos', 'Graphic Designer', 'img/barbara-ramos-graphic-designer.jpg'),
];

for(let i = 0; i < membersTeam.length; i++){

    for(let key in membersTeam[i]){

        console.log(key+': ', membersTeam[i][key]);
    }

    document.querySelector ('.container').innerHTML += `
    <div class="container-info">
        <h2>${membersTeam[i]['name']}</h2>
        <h3>${membersTeam[i]['role']}</h3>
        ${membersTeam[i]['img']}
    </div>
`
};

function createNewProfile (nameUser, roleUser, imgUser){
    let newProfile = {
        name : nameUser,
        role : roleUser,
        img: `
        <img src="${imgUser}">
        `
};

return newProfile;
};