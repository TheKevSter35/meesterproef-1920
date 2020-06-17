function checkForUsedTool (toolName, collection) {
	for (const tool of collection) {
		if (tool.name === toolName) {
			return true
		}
	}
	return false
}

function getToolFromCollection (toolName, collection) {
	for (const tool of collection) {
		if (tool.name === toolName) {
			return tool
		}
	}
	throw new Error('Tool not found')
}

function updateToolInformation (tool, key, newInfo) {
	if (newData === null || newData === undefined || newData === Infinity || newData === -Infinity) {
		throw new Error("Data not valid")
	}
	for (const keyName of Object.keys(tool)) {
		if (keyName === key) {
			tool[keyName] = newInfo
			return tool
		}
	}
	throw new Error("Key not found")
}

exports.isUsed = checkForUsedTool
exports.retrieve = getToolFromCollection
exports.updateInfo = updateToolInformation