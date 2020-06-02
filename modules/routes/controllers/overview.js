exports.get = function (req, res) {
	if (req.session === undefined) {
		res.redirect('/session-end')
	}
	const user = {
		name: req.session.name,
		score: req.session.score
	}
	return res.render('pages/overview', {
		user: user
	})
}