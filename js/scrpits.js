/*
0 Creo l'array con all'interno i nomi del team e i valori di ognuno
1. Stampo in console le informazioni
2. Stampo le info in html
*/


// Creo array di oggetti con  all'interno i membri
const teamMember = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo:'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },

];

// stampo in console
console.log('I membri sono', teamMember)

for (let i=0; i<teamMember.length; i++){
    console.log('Membro ' + (i+1), teamMember[i].nome, teamMember[i].ruolo, teamMember[i].foto);

    const cardContainer = document.getElementById('card-container');
    const newCard = document.createElement('div');
    cardContainer.append(newCard);
    newCard.classList.add('card');

    newCard.innerHTML = (teamMember[i].nome + '<br>' +teamMember[i].ruolo + '<br>' + teamMember[i].foto);

}

// Stampo nel dom



