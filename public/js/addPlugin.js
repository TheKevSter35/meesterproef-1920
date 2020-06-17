// Upload image input
let inputImageUpload 	= document.querySelector('#uploadFotoInput')
let imagePlacholder		= document.querySelector('#imagePlacholder')

// On image upload
inputImageUpload.addEventListener('change', function (event) {

	if (event.target.files && event.target.files[0]) {

		alert(event.target.files[0])
		let reader = new FileReader()

		reader.onload = function(e) {
			alert(e.target.result)
			document.getElementById('blah').src=e.target.result
		}

		reader.readAsDataURL(input.files[0]) // convert to base64 string
	}

})

imagePlacholder.addEventListener('click', function () {
	alert('Geklikt!')
})

