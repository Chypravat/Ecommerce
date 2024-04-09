const express = require('express')
const router = express.Router()

const app = express()

//controller calling
const contactcontroller = require("./../controller/contact_controller")

//Route Set
router.get('/contact', contactcontroller.getcontact)

module.exports = router