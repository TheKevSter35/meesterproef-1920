module.exports = function (app) {
	const { review, checkLevel, levelName, getTotalScore } = require('../modules/score')
	const { isUsed, retrieve, updateScore } = require('../modules/tool')
	app.get('/quiz-detail', (req, res) => {
		const usedTools = req.session.usedtools
		if (isUsed('Phishing Quiz', usedTools) === false) {
			const tool = {
				toolname: 'Phishing Quiz',
				description: 'A quiz about online phishing.',
				type: 'survey',
				maxpoints: 200,
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
		res.render('pages/quiz/quiz-detail',{
			user: user
		})
	})
	app.get('/quiz-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/quiz/quiz-game', {
			queries: req.query,
			user: user
		})
	})
	app.post('/quiz-result', (req, res) => {
		const toolCollection = req.session.usedtools
		const tool = retrieve('Phishing Quiz', toolCollection)
		const answers = req.body
		const results = review(answers, 20)
		updateScore(toolCollection, tool.toolname, results.earnedPoints)
		req.session.score = getTotalScore(toolCollection)
		req.session.level = levelName(checkLevel(req.session.score))
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/quiz/quiz-result', {
			score: results,
			user: user
		})
	})
}
