module.exports = async function (app) {
	const { review, checkLevel, levelName, getTotalScore } = require('../modules/score')
	const { isUsed, retrieve, updateScore } = require('../modules/tool')
	app.get('/data-game', (req, res) => {
		const usedTools = req.session.usedtools
		if (isUsed('Data enquête', usedTools) === false) {
			const tool = {
				toolname: 'Data enquête',
				description: 'A survey to ask whether to save all data from the user.',
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
		res.render('pages/data/data-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/data-result', (req, res) => {
		const toolCollection = req.session.usedtools
		const tool = retrieve('Data enquête', toolCollection)
		const answers = req.body
		const results = review(answers, tool.maxpoints)
		updateScore(toolCollection, tool.toolname, results.earnedPoints)
		req.session.score = getTotalScore(toolCollection)
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
