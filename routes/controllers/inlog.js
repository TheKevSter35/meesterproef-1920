let users = [{
	user: 'Bob',
	password: '12345678',
	agerange: '60+',
	totalpoints: 100,
	usedtools: [{
		toolname: 'Fishing quiz',
		description: 'A quiz about phishing mail.',
		type: 'quiz',
		maxpoints: 1400,
		earnedpoints: 150
	}, {
		toolname: 'Data Dumpy',
		description: 'See what data you can dump and delete.',
		type: 'game',
		maxpoints: 2300,
		earnedpoints: 1120
	}]
}]

exports.get = function (req, res) {
	res.render('pages/login')
}

exports.process = function (req, res) {
	const username = req.body.username
	const password = req.body.password
	if (!username && !password) {
		res.redirect('/')
	}
	users.map((user) => {
		if (user.user === username && user.password === password) {
			req.session.name = username
			req.session.score = user.totalpoints
			res.redirect('/overzicht')
		} else {
			res.redirect('/login')
		}
	})	
}