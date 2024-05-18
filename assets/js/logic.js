const sunIcon = document.querySelector('#sunIcon');
const moonIcon = document.querySelector('#moonIcon');

function setDarkMode () {
    
}
sunIcon.addEventListener('click', function (event) {
    event.preventDefault();
    setDarkMode();
})

moonIcon.addEventListener('click', function (event) {
    event.preventDefault();
    setLightMode();
})
