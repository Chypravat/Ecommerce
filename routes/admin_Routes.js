const express = require('express')
const router = express.Router()

const app = express()

//controller calling
const dashboardcontroller = require("./../controller/admin/dashboard_controller")

//Route Set
router.get('/', dashboardcontroller.getdashboard)

module.exports = router