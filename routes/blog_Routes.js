const express = require('express')
const router = express.Router()

const app = express()

//controller calling
const blogcontroller = require("./../controller/blog_controller")

//Route Set
router.get('/blog', blogcontroller.getblog)

module.exports = router