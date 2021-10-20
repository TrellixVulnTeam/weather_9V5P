import '../scss/style.scss';

const submitBtn = document.querySelector('.form--submit');
const formCity = document.querySelector('.form--textCity');
const formCountry = document.querySelector('.form--country');
const containerResult = document.querySelector('.container');
const form = document.querySelector('.main--form');

window.addEventListener('load', () => {
    submitBtn.addEventListener('click', checkWeather)

});


function checkWeather(e) {
    if(formCity.value === '' || formCountry === ''){
        showError('Los dos campos deben de ser llenados');
        return;
    }else{
        const apiKey = '85028661cfc80769b7fff498953134d3';
        const city = formCity.value;
        const country = formCountry.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
        console.log(url);
        console.log(formCity.value);
        console.log(formCountry.value);
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