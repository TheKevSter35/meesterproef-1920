let users = [{
	user: "Bob",
	password: "12345678",
	agerange: "60+",
	totalpoints: 100,
	usedtools: [{
		toolname: "Fishing quiz",
		description: "A quiz about phishing mail.",
		type: "quiz",
		maxpoints: 1400,
		earnedpoints: 150
	}, {
		toolname: "Data Dumpy",
		description: "See what data you can dump and delete.",
		type: "game",
		maxpoints: 2300,
		earnedpoints: 1120
	}]
}]

exports.get = function (req, res) {
	res.render("pages/login")
}

exports.process = function (req, res) {
	const params = req.body
	if (!params.username && !params.password) {
		res.redirect("/")
	}
	users.map((user) => {
		if (user.user === params.username && user.password === params.password) {
			res.render("pages/overview", {
				user: user.user,
				totalpoints: user.totalpoints 
			})
		} else {
			res.redirect("/")
		}
	})	
}