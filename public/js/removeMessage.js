const messages = document.querySelectorAll('div.info')

messages.forEach(function (message) {
	const button = message.querySelector('button')
	button.addEventListener('click', function () {
		deleteElement(message)
	})
})

function deleteElement(element) {
	return element.parentNode.removeChild(element)
}