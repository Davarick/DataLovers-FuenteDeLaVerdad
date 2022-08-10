import { emptyScreenJean, emptyScreenRos, sortDataAndClone, cloner } from './data.js';
import data from './data/ghibli/ghibli.js';

const textNav = document.getElementById("textNav");
const btnNav = document.getElementById("btnNav");
const btnClose = document.getElementById("btnClose");
const btnMovies = document.getElementById("btnMovies");
const btnCharacters = document.getElementById("btnCharacters");
const btnVehicles = document.getElementById("btnVehicles");
const btnLocations = document.getElementById("btnLocations");
const btnShowAll = document.getElementById("btnShowAll");

btnNav.addEventListener("click", function () {
    textNav.style.display = "block";
});

btnClose.addEventListener("click", function () {
    textNav.style.display = "none";
});
let selectedElement;
data.films.forEach(element => {
    cloner(element);
    sortDataAndClone(element.people);
    sortDataAndClone(element.locations);
    sortDataAndClone(element.vehicles);
    selectedElement = 'all';
});



btnMovies.addEventListener("click", function () {
    emptyScreenJean();
    sortDataAndClone(data.films);
    selectedElement = 'films';
})

btnCharacters.addEventListener("click", function () {
    emptyScreenJean();
    data.films.forEach(element => {
        sortDataAndClone(element.people);
    });
    selectedElement = 'characters';
})

btnVehicles.addEventListener("click", function () {
    emptyScreenRos();
    data.films.forEach(element => {
        sortDataAndClone(element.vehicles);
    });
    selectedElement = 'vehicles';
})

btnLocations.addEventListener("click", function () {
    emptyScreenRos();
    data.films.forEach(element => {
        sortDataAndClone(element.locations);
    });
    selectedElement = 'locations';
})

btnShowAll.addEventListener("click", function () {
    emptyScreenRos();
    data.films.forEach(element => {
        cloner(element);
        sortDataAndClone(element.people);
        sortDataAndClone(element.locations);
        sortDataAndClone(element.vehicles);
    });
    selectedElement = 'all';
})

const orderAZ = () => {
    emptyScreenRos();
    switch (selectedElement) {
        case 'films':
            let dataArray = data.films.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            dataArray.forEach(item => cloner(item));
            break;
        case 'characters':
            let dataArray1 = [];
            data.films.forEach(film => {
                dataArray1.push(film.people.filter(character => character.name));
            });
            let dataArray2 = dataArray1.flat();
            let dataArray3 = dataArray2.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            dataArray3.forEach(item => cloner(item));
            break;
        case 'vehicles':
            let dataArray4 = [];
            data.films.forEach(film => {
                dataArray4.push(film.vehicles.filter(vehicle => vehicle.name));
            });
            let dataArray5 = dataArray4.flat();
            let dataArray6 = dataArray5.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            dataArray6.forEach(item => cloner(item));
            break;
        case 'locations':
            let dataArray7 = [];
            data.films.forEach(film => {
                dataArray7.push(film.locations.filter(location => location.name));
            });
            let dataArray8 = dataArray7.flat();
            let dataArray9 = dataArray8.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            dataArray9.forEach(item => cloner(item));
            break;
        case 'all':
            let dataArray11 = data.films.filter(film => film.name);
            data.films.forEach(film => {
                dataArray11.push(film.locations.filter(location => location.name));
            });
            let dataArray12 = dataArray11.flat();
            let dataArray13 = dataArray12.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            dataArray13.forEach(item => cloner(item));
            break;

    }

}
const btnOrderAZ = document.getElementById('btnOrderAZ');
btnOrderAZ.addEventListener("click", orderAZ);

const orderZA = () => {
    emptyScreenRos();
    switch (selectedElement) {
        case 'films':
            let dataArray = data.films.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            let reverseDataArray = dataArray.reverse();
            reverseDataArray.forEach(item => cloner(item));
            break;
        case 'characters':
            let dataArray1 = [];
            data.films.forEach(film => {
                dataArray1.push(film.people.filter(character => character.name));
            });
            let dataArray2 = dataArray1.flat();
            let dataArray3 = dataArray2.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            let reverseDataArray3 = dataArray3.reverse();
            reverseDataArray3.forEach(item => cloner(item));
            break;
        case 'vehicles':
            let dataArray4 = [];
            data.films.forEach(film => {
                dataArray4.push(film.vehicles.filter(vehicle => vehicle.name));
            });
            let dataArray5 = dataArray4.flat();
            let dataArray6 = dataArray5.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            let reverseDataArray6 = dataArray6.reverse();
            reverseDataArray6.forEach(item => cloner(item));
            break;
        case 'locations':
            let dataArray7 = [];
            data.films.forEach(film => {
                dataArray7.push(film.locations.filter(location => location.name));
            });
            let dataArray8 = dataArray7.flat();
            let dataArray9 = dataArray8.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            let reverseDataArray9 = dataArray9.reverse();
            reverseDataArray9.forEach(item => cloner(item));
            break;
        case 'all':
            let dataArray11 = data.films.filter(film => film.name);
            data.films.forEach(film => {
                dataArray11.push(film.locations.filter(location => location.name));
            });
            let dataArray12 = dataArray11.flat();
            let dataArray13 = dataArray12.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            let reverseDataArray13 = dataArray13.reverse();
            reverseDataArray13.forEach(item => cloner(item));
            break;

    }

}

const btnOrderZA = document.getElementById('btnOrderZA');
btnOrderZA.addEventListener("click", orderZA);

const showData = document.getElementById("root");
showData.addEventListener('click', function () { showData.style.display = 'none' })
function dataWindow(filmName) {
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
