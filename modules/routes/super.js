module.exports = function (app) {
	
	app.get('/super-detail', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score
		}
		res.render('pages/super/super-detail',{
			user: user
		})
	})
	app.get('/super-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score
		}
		res.render('pages/super/super-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/super-result', (req, res) => {
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
			score: req.session.score,
			usedTools: req.session.usedtools
		}
		req.session.score = score
		res.render('pages/super/super-result', {
			score: results,
			user: user
		})
	})
}
