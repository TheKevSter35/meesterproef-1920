function reviewAnswers (answers, pointsForCorrectAnswer, allAnswers) {
	let totalScore, totalAnswers, score, correctAnswers
	totalScore = totalAnswers = score = correctAnswers = 0
	Object.entries(answers).map((answer, index) => {
		if (answer[1] === '1') {
			score += pointsForCorrectAnswer
			correctAnswers += 1
		}
		totalScore += pointsForCorrectAnswer
		totalAnswers += index
	})
	if (allAnswers && isNaN(allAnswers) === false) {
		totalAnswers = allAnswers
		totalScore = pointsForCorrectAnswer * allAnswers
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
		return 1
	case (score >= 500 && score < 1500):
		return 2
	case (score >= 1500 && score < 3000):
		return 3
	case (score >= 3000 && score < 5000):
		return 4
	case (score >= 5000 && score < 7000):
		return 5
	}
}

function progressToNextLevel (score, level) {
	let pointsToNextLevel = 0
	switch (level) {
	case 1:
		pointsToNextLevel = 500 - score
		break
	case 2:
		pointsToNextLevel = 1500 - score
		break
	case 3:
		pointsToNextLevel = 3000 - score
		break
	case 4:
		pointsToNextLevel = 5000 - score
		break
	case 5:
		pointsToNextLevel = 7000 - score
		break
	}
	return {
		pointsToNextLevel: pointsToNextLevel,
		nextLevel: level + 1
	}
}

function getLevelName (level) {
	const levelNames = ['Verkennen', 'Ontdekken', 'Leren', 'Onderzoeken', 'Begrijpen']
	return levelNames[level - 1]
}

function calculateTotalScore (toolCollection, key = 'highscore') {
	let total = 0
	toolCollection.map(function (tool) {
		total += tool[key]
	})
	return total
}

exports.review = reviewAnswers
exports.checkLevel = checkLevel
exports.levelName = getLevelName
exports.toNextLevel = progressToNextLevel
exports.getTotalScore = calculateTotalScore