// Filter buttons
let btnLijstWeergave    = document.querySelector('#btnLijstWeergave');
let btnKaartweergave    = document.querySelector('#btnKaartweergave');

// Views
let listView    = document.querySelector('#toolkits-list');
let mapView     = document.querySelector('#webtoolsmap');

// Set this als default
window.onload = function () {
    // btnLijstWeergave.classList.add('active');
    mapView.style.display   = 'none';
}

btnLijstWeergave.addEventListener('click', function (e) {
    // Toggle buttons
    btnKaartweergave.classList.remove('active');
    btnLijstWeergave.classList.add('active');

    listView.style.display  = 'flex';
    mapView.style.display   = 'none';
});

btnKaartweergave.addEventListener('click', function (e) {

    // Toggle buttons
    btnLijstWeergave.classList.remove('active');
    btnKaartweergave.classList.add('active');

    // Toggle content
    mapView.style.display   = 'block';
    listView.style.display  = 'none';

});