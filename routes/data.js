module.exports = function (app) {
	const { review, checkLevel, levelName, getTotalScore } = require('../modules/score')
	const { isUsed, retrieve, updateInfo } = require('../modules/tool')
	app.get('/data-game', (req, res) => {
		const usedTools = req.session.usedTools
		const toolUsed = isUsed('Data enquête', usedTools)
		if (toolUsed === false) {
			const tool = {
				toolname: 'Data enquête',
				description: 'A survey to ask whether to save all data from the user.',
				type: 'survey',
				maxpoints: 100,
				earnedpoints: 0
			}
			req.session.usedTools.push(tool)
		}
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/data/data-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/data-result', (req, res) => {
		const tool = retrieve('Data enquête', req.session.usedTools)
		const toolCollection = req.session.usedTools
		const answers = req.body
		const results = review(answers, tool.maxpoints)
		updateInfo(tool, 'earnedpoints', results.earnedPoints)
		req.session.score += getTotalScore(toolCollection)
		req.session.level = levelName(checkLevel(req.session.score))
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level,
		}
		res.render('pages/data/data-result', {
			score: results,
			user: user
		})
	})
}
