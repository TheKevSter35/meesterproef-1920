const {v4: uuidv4} = require('uuid')

module.exports = function (req, res) {
	req.session.user = uuidv4()
	return res.redirect('/overzicht')
}