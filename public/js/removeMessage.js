const messages = document.querySelectorAll('div.info')

messages.forEach(function (message) {
	const button = message.querySelector('button')
	button.addEventListener('click', function () {
		deleteElement(message)
		sendAsJsonToServer('/delete-message', { help: false })
	})
})

function deleteElement(element) {
	return element.parentNode.removeChild(element)
}

// Send JSON to server with POST
// source: https://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery
function sendAsJsonToServer (path, dataObject) {
	const req = new XMLHttpRequest()
	const data = JSON.stringify(dataObject)
	req.open('POST', path, true)
	req.setRequestHeader('Content-Type', 'application/json')
	req.send(data)
}