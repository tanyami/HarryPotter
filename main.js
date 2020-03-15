'use strict';
fetch('http://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(characters => workCharacters(characters))
  .catch(error => console.log(error));
  
  const workCharacters = (items) => {
    console.log(items)
    let cardTeachers = document.getElementById('teachers');
    let teachers = items
      .filter((item) => item.hogwartsStaff === true )
      .map((item) =>  {
      let teachers = document.createElement('li');
        cardTeachers.appendChild(teachers)
      const image = document.createElement('img');
        image.setAttribute('src', item.image);
        teachers.appendChild(image);
      const name = document.createElement('p');
        name.innerText = `${item.name} `;
        teachers.appendChild(name);
      });

    let cardGryff = document.getElementById('gryff');
    let gryff = items
      .filter((item) => item.house === 'Gryffindor' && item.hogwartsStudent === true )
      .map((item) =>  {
    let studGryff = document.createElement('li');
      cardGryff.appendChild(studGryff)
      const image = document.createElement('img');
      image.setAttribute('src', item.image);
      studGryff.appendChild(image);
    const name = document.createElement('p');
      name.innerText = `${item.name} `;
      studGryff.appendChild(name);
    });

    let cardSlyth = document.getElementById('slyth');
    let slyth = items
      .filter((item) => item.house === 'Slytherin' && item.hogwartsStudent === true)
      .map((item) =>  {
      let studSlyth = document.createElement('li');
      cardSlyth.appendChild(studSlyth);
      const image = document.createElement('img');
      image.setAttribute('src', item.image);
      studSlyth.appendChild(image);
      const name = document.createElement('p');
      name.innerText = `${item.name} `;
      studSlyth.appendChild(name);
 })

 let cardHuffl = document.getElementById('huffl');
  let huffl = items
  .filter((item) => item.house === 'Ravenclaw' || item.house === 'Hufflepuff' && item.hogwartsStudent === true)
  .map((item) =>  {
    let studHuffl = document.createElement('li');
      cardHuffl.appendChild(studHuffl)
    const image = document.createElement('img');
    image.setAttribute('src', item.image);
    studHuffl.appendChild(image);
    const name = document.createElement('p');
    name.innerText = `${item.name} `;
    studHuffl.appendChild(name);
  })
  }
















