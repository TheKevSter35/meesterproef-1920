const showDatabutton = document.querySelector('.checkin')
showDatabutton.addEventListener('click', showData )

function showData (){
	var audio = new Audio('../../source/audio/incheck.wav')
	audio.play()
	setTimeout(function () {
		const data = document.querySelector('.dataset')
		data.classList.remove('hidden')
	}, 1000)
	
	// setTimeout(function () {
	// 	document.querySelector('.voortgang1').style.backgroundColor = '#C1D8B5'
	// }, 2000)
    
}

