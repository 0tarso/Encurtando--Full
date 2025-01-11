const { Router } = require("express")
const linksController = require("../controllers/linksController")

const linksRouter = Router()

linksRouter.get("/links", linksController.index)
linksRouter.post("/links", linksController.create)
linksRouter.get("/:shortURL", linksController.show)

module.exports = linksRouter