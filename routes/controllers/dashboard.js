exports.get = function (req, res) {
	const { toNextLevel, checkLevel } = require('../../modules/score')
	if (!req.session.userID) {
		return res.redirect('/')
	}
	const currentLevel = checkLevel(req.session.score)
	const level = toNextLevel(req.session.score, currentLevel)
	const user = {
		name: req.session.name,
		score: req.session.score,
		usedTools: req.session.usedtools,
		level: req.session.level,
		help: req.session.help
	}
	return res.render('pages/dashboard', {
		currentLevel: currentLevel,
		user: user,
		level: level
	})
}