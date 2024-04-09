const express = require('express')
const router = express.Router()

const app = express()

//controller calling
const furnicontroller = require("./../controller/furni_controller")

//Route Set
router.get('/furni', furnicontroller.getfurni)

module.exports = router