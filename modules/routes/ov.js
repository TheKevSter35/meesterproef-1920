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
}