exports.delete = function (req, res) {
	if (!req.session.userID) {
		return res.redirect('/')
	}
	const help = req.body.help
	if (help === false && req.session.help !== false) {
		req.session.help = help
	}
	res.redirect('/dashboard')
}