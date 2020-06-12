exports.get = function (req, res) {
	if (!req.session.userID) {
		return res.redirect('/')
	}
	const user = {
		name: req.session.name,
		score: req.session.score,
		usedTools: req.session.usedtools,
		level: req.session.level
	}
	return res.render('pages/dashboard', {
		user: user
	})
}