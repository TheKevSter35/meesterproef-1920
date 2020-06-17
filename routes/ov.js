module.exports = function (app) {
	const { review, checkLevel, levelName, getTotalScore } = require('../modules/score')
	const { isUsed, retrieve, updateScore } = require('../modules/tool')
	app.get('/ov-detail', (req, res) => {
		if (!req.session.userID) {
			return res.redirect('/')
		}
		const usedTools = req.session.usedtools
		if (isUsed('OV survey', usedTools) === false) {
			const tool = {
				toolname: 'OV survey',
				description: 'A survey asking what data will be saved when you use a OV-chipkaart',
				type: 'survey',
				maxpoints: 100,
				recentscore: 0,
				highscore: 0
			}
			usedTools.push(tool)
		}
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/ov/ov-detail',{
			user: user,
			usedTools: req.session.usedtools
		})
	})
	app.get('/ov-game', (req, res) => {
		if (!req.session.userID) {
			return res.redirect('/')
		}
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level,
		}
		res.render('pages/ov/ov-game', {
			queries: req.query,
			user: user,
			usedTools: req.session.usedtools
		})
	})
	app.post('/ov-result', (req, res) => {
		if (!req.session.userID) {
			return res.redirect('/')
		}
		const toolCollection = req.session.usedtools
		const tool = retrieve('OV survey', toolCollection)
		const answers = req.body
		const results = review(answers, 25, 4)
		updateScore(toolCollection, tool.toolname, results.earnedPoints)
		req.session.score = getTotalScore(toolCollection)
		req.session.level = levelName(checkLevel(req.session.score))
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/ov/ov-result', {
			score: results,
			user: user,
			usedTools: req.session.usedtools
		})
	})
}
