const express = require('express')
const router = express.Router()

const app = express()

//controller calling
const shopcontroller = require("./../controller/shop_controller")

//Route Set
router.get('/shop', shopcontroller.getshop)

module.exports = router