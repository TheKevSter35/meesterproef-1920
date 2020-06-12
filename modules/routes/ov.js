module.exports = function (app) {
	
	app.get('/ov-detail', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score
		}
		res.render('pages/ov/ov-detail',{
			user: user
		})
	})
	app.get('/ov-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score
		}
		res.render('pages/ov/ov-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/ov-result', (req, res) => {
		const answers = req.body
		let totalScore = score = 0
		Object.entries(answers).map((answer) => {
			if (answer[1] === '1') {
				score += 25
			}
			totalScore = 100
		})
		const results = {
			earnedPoints: score,
			totalPoints: totalScore
		}
		const user = {
			name: req.session.name,
			score: req.session.score,
			usedTools: req.session.usedtools
		}
		req.session.score = score
		res.render('pages/ov/ov-result', {
			score: results,
			user: user
		})
	})
}
