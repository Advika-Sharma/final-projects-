const rootcontroller = require("../controllers/rootcontroller")

const express = require("express")
const router = express.Router()
router.get("/",rootcontroller)
module.exports = router