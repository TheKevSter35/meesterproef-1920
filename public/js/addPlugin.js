// Upload image input
let inputImageUpload 	= document.querySelector('#uploadFotoInput')
let imagePlacholder		= document.querySelector('#imagePlaceholder')
let imageReplacer		= document.querySelector('#justdoit')

// On image upload
inputImageUpload.addEventListener('change', function (event) {

	if (event.target.files && event.target.files[0]) {


		const reader = new FileReader()

		reader.addEventListener('load', function (ev) {
			
			imageReplacer.src = ev.target.result

		})

		reader.readAsDataURL(event.target.files[0]) // convert to base64 url

	}

})

imagePlacholder.addEventListener('click', function () {
	alert('Geklikt!')
})

