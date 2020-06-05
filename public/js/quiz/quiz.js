//Question 1
const correctQuestion1 = document.getElementById('question1-answer2')
correctQuestion1.addEventListener('click', scrollToForm)

function scrollToForm() {
	document.querySelector('.question1-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question1-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion1 = document.getElementById('text-question1')
		textQuestion1.classList.add('hidden')
		const CorrectTextQuestion1 = document.querySelector('.info-text-question1')
		CorrectTextQuestion1.classList.remove('hidden')
		const next = document.querySelector('.next-question1')
		next.classList.remove('hidden')
	}, 2000)

	// setTimeout(function () {
	// 	document.querySelector('#question2').scrollIntoView({
	// 		behavior: 'smooth'
	// 	})
	// }, 2000)
}

const wrongQuestion1 = document.getElementById('question1-answer1')
wrongQuestion1.addEventListener('click', WrongscrollToForm)

function WrongscrollToForm() {

	document.querySelector('.question1-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question1-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion1 = document.getElementById('text-question1')
		textQuestion1.classList.add('hidden')
		const CorrectTextQuestion1 = document.querySelector('.info-text-question1')
		CorrectTextQuestion1.classList.remove('hidden')
		const next = document.querySelector('.next-question1')
		next.classList.remove('hidden')
	}, 2000)
}

// --------------------------------------------


//Question 2
const correctQuestion2 = document.getElementById('question2-answer2')
correctQuestion2.addEventListener('click', scrollToForm2)

function scrollToForm2() {
	document.querySelector('.question2-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question2-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion2 = document.getElementById('text-question2')
		textQuestion2.classList.add('hidden')
		const CorrectTextQuestion2 = document.querySelector('.info-text-question2')
		CorrectTextQuestion2.classList.remove('hidden')
		const next = document.querySelector('.next-question2')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion2 = document.getElementById('question2-answer1')
wrongQuestion2.addEventListener('click', WrongscrollToForm2)

function WrongscrollToForm2() {
	document.querySelector('.question2-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question2-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion2 = document.getElementById('text-question2')
		textQuestion2.classList.add('hidden')
		const CorrectTextQuestion2 = document.querySelector('.info-text-question2')
		CorrectTextQuestion2.classList.remove('hidden')
		const next = document.querySelector('.next-question2')
		next.classList.remove('hidden')
	}, 2000)
}

// --------------------------------------------


//Question 3
const correctQuestion3 = document.getElementById('question3-answer2')
correctQuestion3.addEventListener('click', scrollToForm3)

function scrollToForm3() {
	document.querySelector('.question3-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question3-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion3 = document.getElementById('text-question3')
		textQuestion3.classList.add('hidden')
		const CorrectTextQuestion3 = document.querySelector('.info-text-question3')
		CorrectTextQuestion3.classList.remove('hidden')
		const next = document.querySelector('.next-question3')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion3 = document.getElementById('question3-answer1')
wrongQuestion3.addEventListener('click', WrongscrollToForm3)

function WrongscrollToForm3() {
	document.querySelector('.question3-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question3-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion3 = document.getElementById('text-question3')
		textQuestion3.classList.add('hidden')
		const CorrectTextQuestion3 = document.querySelector('.info-text-question3')
		CorrectTextQuestion3.classList.remove('hidden')
		const next = document.querySelector('.next-question3')
		next.classList.remove('hidden')
	}, 2000)
}

// --------------------------------------------

//Question 4
const correctQuestion4 = document.getElementById('question4-answer2')
correctQuestion4.addEventListener('click', scrollToForm4)

function scrollToForm4() {
	document.querySelector('.question4-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question4-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion4 = document.getElementById('text-question4')
		textQuestion4.classList.add('hidden')
		const CorrectTextQuestion4 = document.querySelector('.info-text-question4')
		CorrectTextQuestion4.classList.remove('hidden')
		const next = document.querySelector('.next-question4')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion4 = document.getElementById('question4-answer1')
wrongQuestion4.addEventListener('click', WrongscrollToForm4)

function WrongscrollToForm4() {
	document.querySelector('.question4-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question4-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion4 = document.getElementById('text-question4')
		textQuestion4.classList.add('hidden')
		const CorrectTextQuestion4 = document.querySelector('.info-text-question4')
		CorrectTextQuestion4.classList.remove('hidden')
		const next = document.querySelector('.next-question4')
		next.classList.remove('hidden')
	}, 2000)
}

// --------------------------------------------

//Question 5
const correctQuestion5 = document.getElementById('question5-answer1')
correctQuestion5.addEventListener('click', scrollToForm5)

function scrollToForm5() {
	document.querySelector('.question5-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question5-answer1').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion5 = document.getElementById('text-question5')
		textQuestion5.classList.add('hidden')
		const CorrectTextQuestion5 = document.querySelector('.info-text-question5')
		CorrectTextQuestion5.classList.remove('hidden')
		const next = document.querySelector('.next-question5')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion5 = document.getElementById('question5-answer2')
wrongQuestion5.addEventListener('click', WrongscrollToForm5)

function WrongscrollToForm5() {
	document.querySelector('.question5-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question5-answer2').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion5 = document.getElementById('text-question5')
		textQuestion5.classList.add('hidden')
		const CorrectTextQuestion5 = document.querySelector('.info-text-question5')
		CorrectTextQuestion5.classList.remove('hidden')
		const next = document.querySelector('.next-question5')
		next.classList.remove('hidden')
	}, 2000)
}

// --------------------------------------------

//Question 6
const correctQuestion6 = document.getElementById('question6-answer1')
correctQuestion6.addEventListener('click', scrollToForm6)

function scrollToForm6() {
	document.querySelector('.question6-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question6-answer1').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion6 = document.getElementById('text-question6')
		textQuestion6.classList.add('hidden')
		const CorrectTextQuestion6 = document.querySelector('.info-text-question6')
		CorrectTextQuestion6.classList.remove('hidden')
		const next = document.querySelector('.next-question6')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion6 = document.getElementById('question6-answer2')
wrongQuestion6.addEventListener('click', WrongscrollToForm6)

function WrongscrollToForm6() {
	document.querySelector('.question6-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question6-answer2').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion6 = document.getElementById('text-question6')
		textQuestion6.classList.add('hidden')
		const CorrectTextQuestion6 = document.querySelector('.info-text-question6')
		CorrectTextQuestion6.classList.remove('hidden')
		const next = document.querySelector('.next-question6')
		next.classList.remove('hidden')
	}, 2000)
}

// --------------------------------------------

//Question 7

const correctQuestion7 = document.getElementById('question7-answer2')
correctQuestion7.addEventListener('click', scrollToForm7)

function scrollToForm7() {
	document.querySelector('.question7-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question7-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion7 = document.getElementById('text-question7')
		textQuestion7.classList.add('hidden')
		const CorrectTextQuestion7 = document.querySelector('.info-text-question7')
		CorrectTextQuestion7.classList.remove('hidden')
		const next = document.querySelector('.next-question7')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion7 = document.getElementById('question7-answer1')
wrongQuestion7.addEventListener('click', WrongscrollToForm7)

function WrongscrollToForm7() {
	document.querySelector('.question7-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question7-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion7 = document.getElementById('text-question7')
		textQuestion7.classList.add('hidden')
		const CorrectTextQuestion7 = document.querySelector('.info-text-question7')
		CorrectTextQuestion7.classList.remove('hidden')
		const next = document.querySelector('.next-question7')
		next.classList.remove('hidden')
	}, 2000)
}

// // --------------------------------------------

//Question 8

const correctQuestion8 = document.getElementById('question8-answer2')
correctQuestion8.addEventListener('click', scrollToForm8)

function scrollToForm8() {
	document.querySelector('.question8-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question8-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion8 = document.getElementById('text-question8')
		textQuestion8.classList.add('hidden')
		const CorrectTextQuestion8 = document.querySelector('.info-text-question8')
		CorrectTextQuestion8.classList.remove('hidden')
		const next = document.querySelector('.next-question8')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion8 = document.getElementById('question8-answer1')
wrongQuestion8.addEventListener('click', WrongscrollToForm8)

function WrongscrollToForm8() {
	document.querySelector('.question8-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question8-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion8 = document.getElementById('text-question8')
		textQuestion8.classList.add('hidden')
		const CorrectTextQuestion8 = document.querySelector('.info-text-question8')
		CorrectTextQuestion8.classList.remove('hidden')
		const next = document.querySelector('.next-question8')
		next.classList.remove('hidden')
	}, 2000)
}

// // --------------------------------------------

//Question 9

const correctQuestion9 = document.getElementById('question9-answer2')
correctQuestion9.addEventListener('click', scrollToForm9)

function scrollToForm9() {
	document.querySelector('.question9-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question9-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion9 = document.getElementById('text-question9')
		textQuestion9.classList.add('hidden')
		const CorrectTextQuestion9 = document.querySelector('.info-text-question9')
		CorrectTextQuestion9.classList.remove('hidden')
		const next = document.querySelector('.next-question9')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion9 = document.getElementById('question9-answer1')
wrongQuestion9.addEventListener('click', WrongscrollToForm9)

function WrongscrollToForm9() {
	document.querySelector('.question9-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question9-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion9 = document.getElementById('text-question9')
		textQuestion9.classList.add('hidden')
		const CorrectTextQuestion9 = document.querySelector('.info-text-question9')
		CorrectTextQuestion9.classList.remove('hidden')
		const next = document.querySelector('.next-question9')
		next.classList.remove('hidden')
	}, 2000)
}

// // --------------------------------------------


//Question 10

const correctQuestion10 = document.getElementById('question10-answer2')
correctQuestion10.addEventListener('click', scrollToForm10)

function scrollToForm10() {
	document.querySelector('.question10-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question10-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)
	setTimeout(function () {
		const textQuestion10 = document.getElementById('text-question10')
		textQuestion10.classList.add('hidden')
		const CorrectTextQuestion10 = document.querySelector('.info-text-question10')
		CorrectTextQuestion10.classList.remove('hidden')
		const next = document.querySelector('.next-question10')
		next.classList.remove('hidden')
	}, 2000)
}

const wrongQuestion10 = document.getElementById('question10-answer1')
wrongQuestion10.addEventListener('click', WrongscrollToForm10)

function WrongscrollToForm10() {
	document.querySelector('.question10-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question10-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		const textQuestion10 = document.getElementById('text-question10')
		textQuestion10.classList.add('hidden')
		const CorrectTextQuestion10 = document.querySelector('.info-text-question10')
		CorrectTextQuestion10.classList.remove('hidden')
		const next = document.querySelector('.next-question10')
		next.classList.remove('hidden')
	}, 2000)
}
const submit = document.querySelector('.next-question10')
submit.addEventListener('click', submitForm)
function submitForm() {
	document.querySelector('#submit').click()
}