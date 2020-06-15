function reviewAnswers (answers, pointsOnCorrectAnswer, allAnswers) {
	let totalScore, totalAnswers, score, correctAnswers
	totalScore = totalAnswers = score = correctAnswers = 0
	Object.entries(answers).map((answer, index) => {
		if (answer[1] === '1') {
			score += pointsOnCorrectAnswer
			correctAnswers += 1
		}
		totalScore += pointsOnCorrectAnswer
		totalAnswers += index
	})
	if (allAnswers && isNaN(allAnswers) === false) {
		totalAnswers = allAnswers
		totalScore = pointsOnCorrectAnswer * allAnswers
	}
	return {
		correctAnswers: correctAnswers,
		earnedPoints: score,
		totalPoints: totalScore
	}
}

function checkLevel (score) {
	switch (true) {
	case (score < 500):
		return 'Verkennen'
	case (score >= 500 && score < 1500):
		return 'Leren'
	case (score >= 1500 && score < 3000):
		return 'Onderzoeken'
	case (score >= 3000 && score < 5000):
		return 'Begrijpen'
	}
}

exports.review = reviewAnswers
exports.checkLevel = checkLevel