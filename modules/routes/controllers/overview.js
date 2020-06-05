exports.get = function (req, res) {
	if (!req.session.userID) {
		return res.redirect('/')
	}
	const user = {
		name: req.session.name,
		score: req.session.score
	}
	return res.render('pages/overview', {
		user: user
	})
}