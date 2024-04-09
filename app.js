const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const flash = require('express-flash')


const path = require('path')
const app = express()
const port = 3001

// DB Connection
const db = require('./model/index')

db.sequelize.sync({force: false})


// body parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}))


//Public
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


//Set View Engine
app.set('view engine', 'ejs')
app.set('views', 'view')



///Router Calling
const dashboardRouter = require('./routes/admin_Routes')
const furniRouter = require("./routes/furni_router")
const shopRouter = require('./routes/shop_router')
const contactRouter = require('./routes/contact_router')
const blogRouter = require('./routes/blog_Routes')

//Router Implemnting
app.use(dashboardRouter)
app.use(furniRouter)
app.use(shopRouter)
app.use(contactRouter)
app.use(blogRouter)



app.listen(port, () => {
  console.log(`http://localhost:3001/`);
  console.log(`Example app listening on port ${port}`)
})