import data from './data/ghibli/ghibli.js';

export const sortDataAndClone = (dataInside) => {
  dataInside.forEach(item => cloner(item));
}

let firstDiv = document.getElementById("cloneSection");
export const cloner = (itemData) => {
  let secondDiv = firstDiv.cloneNode(true);
  secondDiv.children[1].src = itemData.img;
  secondDiv.children[0].innerHTML = itemData.name;
  secondDiv.id = itemData.id;
  secondDiv.addEventListener('click', function () { dataWindow(secondDiv.id); });
  document.getElementById('bigDivs').appendChild(secondDiv);
  secondDiv.style.display = 'block';
}

export const emptyScreenJean = () => {
  const removeSection = document.getElementById("bigDivs")
  removeSection.parentNode.removeChild(removeSection)
  const newDiv = document.createElement("div");
  newDiv.id = "bigDivs"
  document.body.appendChild(newDiv)
} 

export const emptyScreenRos = () => {
  let allData = document.getElementsByClassName("sectionToClone");
  while (allData.length > 0) allData[0].remove();
}

const showData = document.getElementById("root");
showData.addEventListener('click', function () { showData.style.display = 'none' })

export function dataWindow(filmName) {
  showData.style.display = "block"
  for (let x = 0; x < data.films.length; x++) {
      if (filmName === data.films[x].id) {
          document.getElementById('data1').innerHTML = ('Name: ' + data.films[x].name);
          document.getElementById('data2').innerHTML = ('Description: ' + data.films[x].description);
          document.getElementById('data3').innerHTML = ('Director: ' + data.films[x].director);
          document.getElementById('data4').innerHTML = ('Producer: ' + data.films[x].producer);
          document.getElementById('data5').innerHTML = ('Release date: ' + data.films[x].release_date);
          document.getElementById('data6').innerHTML = ('Rotten Tomato Score: ' + data.films[x].rt_score);
          break;
      }
      else {
          data.films[x].people.forEach(name => {
              if (filmName === name.id) {
                  document.getElementById('data1').innerHTML = ('Name: ' + name.name);
                  document.getElementById('data2').innerHTML = ('Age: ' + name.age);
                  document.getElementById('data3').innerHTML = ('Eye color: ' + name.eye_color);
                  document.getElementById('data4').innerHTML = ('Gender: ' + name.gender);
                  document.getElementById('data5').innerHTML = ('Hair color: ' + name.hair_color);
                  document.getElementById('data6').innerHTML = ('Apears in: ' + data.films[x].name);
              }
          });
          data.films[x].vehicles.forEach(name => {
              if (filmName === name.id) {
                  document.getElementById('data1').innerHTML = ('Name: ' + name.name);
                  document.getElementById('data2').innerHTML = ('Description: ' + name.description);
                  document.getElementById('data3').innerHTML = ('Vehicle class: ' + name.vehicle_class);
                  document.getElementById('data4').innerHTML = ('Pilot: ' + name.pilot.name);
                  document.getElementById('data5').innerHTML = ('Length: ' + name.length);
                  document.getElementById('data6').innerHTML = ('Apears in: ' + data.films[x].name);
              }
          });
          data.films[x].locations.forEach(name => {
              if (filmName === name.id) {
                  document.getElementById('data1').innerHTML = ('Name: ' + name.name);
                  document.getElementById('data2').innerHTML = ('Climate: ' + name.climate);
                  document.getElementById('data3').innerHTML = ('Residents: ' + name.residents);
                  document.getElementById('data4').innerHTML = ('Water surface: ' + name.surface_water);
                  document.getElementById('data5').innerHTML = ('Terrain: ' + name.terrain);
                  document.getElementById('data6').innerHTML = ('Appears in: ' + data.films[x].name);
              }
          });
      }
  }
}
