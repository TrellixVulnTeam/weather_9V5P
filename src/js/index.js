import '../scss/style.scss';

const submitBtn = document.querySelector('.form--submit');
const formCity = document.querySelector('.form--textCity');
const formCountry = document.querySelector('.form--country');
const containerResult = document.querySelector('.container');

window.addEventListener('load', () => {
    submitBtn.addEventListener('click', checkWeather)

});


function checkWeather(e) {
    if(formCity.value === '' || formCountry === ''){
        showError('Los dos campos deben de ser llenados');
        return;
    }else{
        const city = formCity.value;
        const country = formCountry.value;
        const appendValidation = document.querySelector('.weatherResult');
        if(appendValidation){
            setTimeout(appendValidation.remove(), 500);
        }
        //Consultar el clime con los datos
        getData(city, country);
    }
}

function getData(city, country){
    const apiKey = '85028661cfc80769b7fff498953134d3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            if(data.cod === '404'){
                showError('Ciudad no encontrada');
                return;
            }

            //Mostrat clima
            showWeather(data);
        })
}

function showWeather(data) {
    const appendValidation = document.querySelector('.weatherResult');
    if(!appendValidation){
        const mainObject = data.main;
        const currentTemp = (mainObject.temp - 273.15).toFixed(2);
        const tempMin = (mainObject.temp_min -273.15).toFixed(2);
        const tempMax = (mainObject.temp_max - 273.15).toFixed(2);
        const feelsLike = (mainObject.feels_like - 273.15).toFixed(2);
        const namePlace = data.name;
        
        const tempContainer = document.createElement('section');
        tempContainer.classList.add('weatherResult');
        tempContainer.innerHTML = `
            <h2>${namePlace}</h2>
            <p>Temperatura actual: <strong>${currentTemp}°</strong></p>
            <div>
                <p>Temperatura mínima: <strong>${tempMin}°</strong></p>
                <p>Temperatura máxima: <strong>${tempMax}°</strong></p>
            </div>
            <p>Sensación térmica: <strong>${feelsLike}°</strong></p>
            <i>La temperatura se muestra en grados celcius</i>
        `;
        containerResult.append(tempContainer);
    }
}

function showError(message) {
    const errorValidation = document.querySelector('.errorMessage');
    
    if(!errorValidation){
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('errorMessage');
    
        errorMessage.innerHTML = `
            <p>${message}</p>
        `;
    
        containerResult.append(errorMessage);
        setTimeout(() => {
            errorMessage.remove();
        }, 2500)
    }
}