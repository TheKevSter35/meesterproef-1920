
let introBtn = document.querySelector('#introBtnModal')
let btnModal1 = document.querySelector('#btnModal1')
let btnModal2 = document.querySelector('#btnModal2')
let btnModal3 = document.querySelector('#btnModal3')

let introHeader = document.querySelector('#introHeaderModal')
let introText = document.querySelector('#introTextModal')

let imageModal1 = document.querySelector('#imageModal1')
let imageModal2 = document.querySelector('#imageModal2')
let imageModal3 = document.querySelector('#imageModal3')

let textModal1 = document.querySelector('#textModal1')
let textModal2 = document.querySelector('#textModal2')
let textModal3 = document.querySelector('#textModal3')

let overviewModal = document.querySelector('#overviewModal')

introBtn.addEventListener('click', function (e) {

	// Toggle tekst
	introHeader.classList.add('hideModalelement')
	introText.classList.add('hideModalelement')
	introBtn.classList.add('hideModalelement')

	// Toggle image
	textModal1.classList.remove('hideModalelement')
	imageModal1.classList.remove('hideModalelement')

	// Toggle buttons
	introBtn.classList.add('hideModalelement')
	btnModal1.classList.remove('hideModalelement')

})


btnModal1.addEventListener('click', function (e) {


	// Toggle tekst
	textModal1.classList.add('hideModalelement')
	textModal2.classList.remove('hideModalelement')

	// Toggle image
	imageModal1.classList.add('hideModalelement')
	imageModal2.classList.remove('hideModalelement')

	// Toggle buttons
	btnModal1.classList.add('hideModalelement')
	btnModal2.classList.remove('hideModalelement')

})

btnModal2.addEventListener('click', function (e) {


	// Toggle tekst
	textModal2.classList.add('hideModalelement')
	textModal3.classList.remove('hideModalelement')

	// Toggle image
	imageModal2.classList.add('hideModalelement')
	imageModal3.classList.remove('hideModalelement')

	// Toggle buttons
	btnModal2.classList.add('hideModalelement')
	btnModal3.classList.remove('hideModalelement')

})

btnModal3.addEventListener('click', function (e) {

	overviewModal.style.display = 'none'

})