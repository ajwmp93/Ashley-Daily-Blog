const sunIcon = document.querySelector('#sunIcon');
const moonIcon = document.querySelector('#moonIcon');
const body = document.body;

let mode = 'dayMode';

checkMode();

sunIcon.addEventListener('click', function (event) {
    event.preventDefault();
    setNightMode();
})

moonIcon.addEventListener('click', function (event) {
    event.preventDefault();
    setDayMode();
})

function checkMode() {
    let mode = 'dayMode';
    if (!mode) {
        setDayMode();
    }
    if (mode === 'dayMode') {
        setDayMode();
    }
    else if (mode === 'nightMode') {
        setNightMode();
    }
}

function setDayMode () {
    const body = document.body;
    body.classList.remove('nightMode');
    body.classList.add('dayMode');
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
    localStorage.setItem('mode', 'dayMode');
    mode = 'dayMode';
}

function setNightMode () {
    const body = document.body;
    body.classList.remove('dayMode');
    body.classList.add('nightMode');
    sunIcon.style.display = 'none';
    moonIcon.style.display= 'inline-block';
    localStorage.setItem('mode', 'nightMode');
    mode = 'nightMode';
};