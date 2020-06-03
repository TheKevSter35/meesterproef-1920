//Question 1
const correctQuestion1 = document.getElementById('question1-answer2')
correctQuestion1.addEventListener('click', scrollToForm)

function scrollToForm() {
	document.querySelector('.question1-answer2').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question1-answer2').style.backgroundColor = '#C1D8B5'
	}, 1500)

	setTimeout(function () {
		document.querySelector('#question2').scrollIntoView({
			behavior: 'smooth'
		})
	}, 2000)
}

const wrongQuestion1 = document.getElementById('question1-answer1')
wrongQuestion1.addEventListener('click', WrongscrollToForm)

function WrongscrollToForm() {

	document.querySelector('.question1-answer1').style.backgroundColor = '#00607b'
	setTimeout(function () {
		document.querySelector('.question1-answer1').style.backgroundColor = '#FC5258'
	}, 1500)
	setTimeout(function () {
		document.querySelector('#question2').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question3').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question3').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question4').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question4').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question5').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question5').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question6').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question6').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question7').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question7').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question8').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question8').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question9').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question9').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question10').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#question10').scrollIntoView({
			behavior: 'smooth'
		})
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
		document.querySelector('#submit').click()
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
		document.querySelector('#submit').click()
	}, 2000)
}