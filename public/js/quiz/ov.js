




const answer1 = document.getElementById('answer2-question1')
answer1.addEventListener('click', selectAnswer1 )

function selectAnswer1 (){

	const elem = document.querySelector('.answer1')
	elem.parentNode.removeChild(elem)
	document.querySelector('.answer2').style.backgroundColor = '#C1D8B5'
	document.querySelector('#question1 section ').innerHTML = '  <h2> checkin: 10:03 Centraal Station </h2> <p> saldo: 150 euro</p> '
	setTimeout(function(){ 
		window.location.replace('/overview')
		// document.getElementById("question1").style.opacity = "0"
		// document.getElementById("question1").style.height = "0"
		// 
	}, 4500)
 
    
}

const answer2 = document.getElementById('answer1-question1')
answer2.addEventListener('click', selectAnswer2 )

function selectAnswer2 (){
	const elem = document.querySelector('.answer2')
	elem.parentNode.removeChild(elem)
	document.querySelector('.answer1').style.backgroundColor = '#C1D8B5'
	document.querySelector('#question1 section').innerHTML = ' <h2> checkin: 10:03 Centraal Station </h2> <p> Henk meijer</p> <p> 11-2-1980</p> <p> man</p> <p> henk@email.nl </p> <p> saldo: 150 euro</p> '
	setTimeout(function(){ 
		window.location.replace('/overview')
		// document.getElementById("question1").style.opacity = "0"
		// document.getElementById("question1").style.height = "0"
		// 
	}, 4500)
    
}





// let answer3Question1 = document.getElementById("answer3-question1")
// answer3Question1.addEventListener("click", correctAnswer1 )

// function correctAnswer1 (){

//     document.querySelector(".answer3").style.backgroundColor = "#C1D8B5"
//     document.querySelector("#question1 section h2").innerHTML = "Een boekje is het meest veilig manier om alle wachtwoorden op te slaan. Een internetcrimineel kan er nooit bijkomen"
//     setTimeout(function(){ 
//     document.getElementById("question1").style.opacity = "0"
//     document.getElementById("question1").style.height = "0"
//     }, 6000);
    
// }