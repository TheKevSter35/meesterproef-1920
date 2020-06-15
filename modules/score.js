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

exports.review = reviewAnswers