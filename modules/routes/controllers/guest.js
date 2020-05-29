const { v4: uuidv4 } = require('uuid')

module.exports = function (req, res) {
	req.session.userID = uuidv4()
	req.session.name = 'gast'
	req.session.score = 0
	return res.redirect('/overzicht')
}