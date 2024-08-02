const productcontroller = require("../controllers/productcontroller")

const express = require("express")
const router = express.Router()
router.get("/",productcontroller)

router.get("/name/:name",productcontroller)
router.get("/category/:category",productcontroller)

module.exports = router