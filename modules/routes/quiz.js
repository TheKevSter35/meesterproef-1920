module.exports = function (app) {
	
	app.get('/quiz-detail', (req, res) => {
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
		const answers = req.body
		let totalScore = score = 0
		Object.entries(answers).map((answer) => {
			if (answer[1] === '1') {
				score += 10
			}
			totalScore += 10
		})
		const results = {
			earnedPoints: score,
			totalPoints: totalScore
		}
		const user = {
			name: req.session.name,
			score: req.session.score + results.earnedPoints,
			usedTools: req.session.usedtools,
			level: req.session.level
		}
		req.session.score = score
		res.render('pages/quiz/quiz-result', {
			score: results,
			user: user
		})
	})
}
