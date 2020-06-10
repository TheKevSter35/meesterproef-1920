module.exports = function (app) {
	
	app.get('/oba-detail', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score
		}
		res.render('pages/oba/oba-detail',{
			user: user
		})
	})
}
