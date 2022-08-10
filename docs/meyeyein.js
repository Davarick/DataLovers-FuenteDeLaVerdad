import data from './data/ghibli/ghibli.js';

let filmNumber = [];
let peopleNumber =[];
let vehiclesNumber = [];
let locationsNumber = [];
for (let x = 0; x < data.films.length; x++) {
    filmNumber[x]  = data.films[x].title;
    for (let i = 0; i < data.films[x].people.length; i++) {
        peopleNumber[i] = data.films[x].people[i].name;
    }
    for (let i = 0; i < data.films[x].vehicles.length; i++) {
        vehiclesNumber[i] = data.films[x].vehicles[i].name;
    }
    for (let i = 0; i < data.films[x].locations.length; i++) {
        locationsNumber[i] = data.films[x].locations[i].name;
    }
};

let totalCatalogue = filmNumber.concat(peopleNumber,vehiclesNumber,locationsNumber);
let organizedCatalogue = 0;
let divNumber = totalCatalogue.length / 4;

for (let i = 0; i < divNumber; i++) {
    let div = document.createElement('div');
    div.id = ("div" + i);
    div.className = ("bigDivs");
    document.body.appendChild(div);
    for (let q = 0; q < 4; q++) {
        let div = document.createElement('div');
        div.id = totalCatalogue[organizedCatalogue + q];
        div.className = "organizedData";
        div.innerHTML = totalCatalogue[organizedCatalogue + q];
        document.getElementById("div" + i).appendChild(div); 
        div.addEventListener('click', function (){ dataWindow (div.id); });    
    }
    organizedCatalogue += 4;
};

const showData = document.getElementById("root");
showData.addEventListener('click', function() {showData.style.display = 'none'})
function dataWindow (filmName) {
    showData.style.display = "block"
    for (let x = 0; x < data.films.length; x++) {
        if(filmName === data.films[x].title) {
            document.getElementById('data1').innerHTML = ('Name: ' + data.films[x].title);
            document.getElementById('data2').innerHTML = ('Description: ' + data.films[x].description);
            document.getElementById('data3').innerHTML = ('Director: ' + data.films[x].director);
            document.getElementById('data4').innerHTML = ('Producer: ' + data.films[x].producer);
            document.getElementById('data5').innerHTML = ('Release date: ' + data.films[x].release_date);
            document.getElementById('data6').innerHTML = ('Rotten Tomato Score: ' + data.films[x].rt_score);
            break;
        }
        else {
            for (let i = 0; i < data.films[x].people.length; i++) {
                if(filmName === data.films[x].people[i].name) {
                    document.getElementById('data1').innerHTML = ('Name: ' + data.films[x].people[i].name);
                    document.getElementById('data2').innerHTML = ('Age: ' + data.films[x].people[i].age);
                    document.getElementById('data3').innerHTML = ('Eye color: ' + data.films[x].people[i].eye_color);
                    document.getElementById('data4').innerHTML = ('Gender: ' + data.films[x].people[i].gender);
                    document.getElementById('data5').innerHTML = ('Hair color: ' + data.films[x].people[i].hair_color);
                    document.getElementById('data6').innerHTML = ('Apears in: ' + data.films[x].title);
                    break;
                }
            }
            for (let i = 0; i < data.films[x].vehicles.length; i++) {
                if(filmName === data.films[x].vehicles[i].name) {
                    document.getElementById('data1').innerHTML = ('Name: ' + data.films[x].vehicles[i].name);
                    document.getElementById('data2').innerHTML = ('Description: ' + data.films[x].vehicles[i].description);
                    document.getElementById('data3').innerHTML = ('Vehicle class: ' + data.films[x].vehicles[i].vehicle_class);
                    document.getElementById('data4').innerHTML = ('Pilot: ' + data.films[x].vehicles[i].pilot);
                    document.getElementById('data5').innerHTML = ('Length: ' + data.films[x].vehicles[i].length);
                    document.getElementById('data6').innerHTML = ('Apears in: ' + data.films[x].title);
                    break;
                }
            }
            for (let i = 0; i < data.films[x].locations.length; i++) {
                if(filmName === data.films[x].locations[i].name) {
                    document.getElementById('data1').innerHTML = ('Name: ' + data.films[x].locations[i].name);
                    document.getElementById('data2').innerHTML = ('Climate: ' + data.films[x].locations[i].climate);
                    document.getElementById('data3').innerHTML = ('Residents: ' + data.films[x].locations[i].residents);
                    document.getElementById('data4').innerHTML = ('Water surface: ' + data.films[x].locations[i].surface_water);
                    document.getElementById('data5').innerHTML = ('Terrain: ' + data.films[x].locations[i].terrain);
                    document.getElementById('data6').innerHTML = ('Appears in: ' + data.films[x].title);
                    break;
                }
            }
        }
    };

};