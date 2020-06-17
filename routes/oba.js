module.exports = function (app) {
	const { review, checkLevel, levelName, getTotalScore } = require('../modules/score')
	const { isUsed, retrieve, updateScore } = require('../modules/tool')
	app.get('/oba-detail', (req, res) => {
		const usedTools = req.session.usedtools
		if (isUsed('OBA survey', usedTools) === false) {
			const tool = {
				toolname: 'OBA survey',
				description: 'A survey asking what data will be saved by the Public Library of Amsterdam when lending a book.',
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
		res.render('pages/oba/oba-detail',{
			user: user
		})
	})
	app.get('/oba-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/oba/oba-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/oba-result', (req, res) => {
		const toolCollection = req.session.usedtools
		const tool = retrieve('OBA survey', toolCollection)
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
		res.render('pages/oba/oba-result', {
			score: results,
			user: user
		})
	})
}
