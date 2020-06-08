// Filter buttons
let btnLijstWeergave = document.querySelector('#btnLijstWeergave')
let btnKaartweergave = document.querySelector('#btnKaartweergave')

// Views
let listView = document.querySelector('.plugins-list')
let mapView = document.querySelector('.localfocusvisual')

// Set this als default
window.onload = function () {
	// btnLijstWeergave.classList.add('active');
	listView.style.display = 'none'
}

btnLijstWeergave.addEventListener('click', function (e) {
	// Toggle buttons
	btnKaartweergave.classList.remove('activeState')
	btnLijstWeergave.classList.add('activeState')

	listView.style.display = 'block'
	mapView.style.display = 'none'
})

btnKaartweergave.addEventListener('click', function (e) {

	// Toggle buttons
	btnLijstWeergave.classList.remove('activeState')
	btnKaartweergave.classList.add('activeState')

	// Toggle content
	mapView.style.display = 'block'
	listView.style.display = 'none'

})