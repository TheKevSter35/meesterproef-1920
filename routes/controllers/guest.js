const { v4: uuidv4 } = require('uuid')

module.exports = function (req, res) {
	req.session.userID = uuidv4()
	req.session.name = 'jij'
	req.session.score = 0
	req.session.usedtools = []
	req.session.level = 'Verkennen'
	return res.redirect('/popup')
}