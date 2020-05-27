const router = require("express").Router()

// controllers
const login = require("./controllers/inlog")

router.get("/", login.get)
	.post("/login", login.process)

module.exports = router;