'use strict'

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const team = [
    {
        fullName: 'Wayne Barnet',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        fullName: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        fullName: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        fullName: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        fullName: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        fullName: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];

const member = team[i];

for (let  i = 0; i < team.length; i++) {
    // MILESTONE 1:
    // Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    console.log(member);
    // MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe 
    const ourTeam = document.getElementById("team");
    // BONUS 1:
    // Trasformare la stringa foto in una immagine effettiva
    // BONUS 2:
    // Organizzare i singoli membri in card/schede
    ourTeam.innerHTML += `
        <div class= "card">
            <img src="img/${member.photo}" alt="">
            <h4>${member.fullName}</h4>
            <p>${member.role}</p>
        </div class= "card">
    `;
}




