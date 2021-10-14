import '../scss/style.scss';

const submitBtn = document.querySelector('.form--submit');
const headerTittle = document.querySelector('.header--title');
const headerImage = document.querySelector('.header--figure');

submitBtn.addEventListener('click', checkWeather);

function checkWeather() {
    console.log('Hola');
    /**
     * When the submit button is presed:
     * 1.- Remove the title
     * 2.- Add the class transition to the image
     */
    headerTittle.remove();
}