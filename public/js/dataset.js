
const button = document.querySelector('.checkin')
button.addEventListener('click', showData )

function showData (){
	var audio = new Audio('https://s21.aconvert.com/convert/p3r68-cdx67/5mub3-mzgw8.wav' )
	audio.play()
	setTimeout(function () {
		const data = document.querySelector('.dataset')
		data.classList.remove('hidden')
	}, 1000)
	
	// setTimeout(function () {
	// 	document.querySelector('.voortgang1').style.backgroundColor = '#C1D8B5'
	// }, 2000)
    
}
