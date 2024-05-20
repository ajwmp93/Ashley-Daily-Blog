document.addEventListener('DOMContentLoaded', function() {

    const sunIcon = document.querySelector('#sunIcon');
    const moonIcon = document.querySelector('#moonIcon');
    const body = document.body;

    let mode = 'lightMode';

    checkMode();

    sunIcon.addEventListener('click', function (event) {
        event.preventDefault();
        setDarkMode();
    })

    moonIcon.addEventListener('click', function (event) {
        event.preventDefault();
        setLightMode();
    })
});

function checkMode() {
    let mode = 'lightMode';
    if (!mode) {
        setLightMode();
    }
    if (mode === 'lightMode') {
        setLightMode();
    }
    else if (mode === 'darkMode') {
        setDarkMode();
    }
}

function setLightMode () {
    const body = document.body;
    body.classList.remove('darkMode');
    body.classList.add('lightMode');
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
    localStorage.setItem('mode', 'lightMode');
    mode = 'lightMode';
}

function setDarkMode () {
    const body = document.body;
    body.classList.remove('lightMode');
    body.classList.add('darkMode');
    sunIcon.style.display = 'none';
    moonIcon.style.display= 'inline-block';
    localStorage.setItem('mode', 'darkMode');
    mode = 'darkMode';
};