function checkForUsedTool (toolName, collection) {
	if (!collection) {
		return false
	}
	for (const tool of collection) {
		if (tool.toolname === toolName) {
			return true
		}
	}
	return false
}

function getToolFromCollection (toolName, collection) {
	if (!collection) {
		throw new Error('No tools in collection')
	}
	for (const tool of collection) {
		if (tool.toolname === toolName) {
			return tool
		}
	}
	throw new Error('Tool not found')
}

function updateScore (collection, toolName, score) {
	return collection.map(function (tool) {
		if (tool.toolname === toolName) {
			tool.recentscore = score
			if (tool.highscore < score) {
				tool.highscore = score
			}
		}
		return tool
	})
}

exports.isUsed = checkForUsedTool
exports.retrieve = getToolFromCollection
exports.updateScore = updateScore