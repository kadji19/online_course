const express = require("express")
const app= express()
const path = require('path')
const cors = require("cors")
app.use(cors())


const userRoute =require('./student/routes/userRoute')
const authRoute =require('./student/routes/authRoute')
const coursRoute = require('./admin/routes/coursRoute')
const adminRoute = require('./admin/routes/adminRoute')
const categorieRoute = require('./admin/routes/categorieRoutes')
/* const categorieRoutes = require('./admin/routes/categorieRoutes') */



app.use(express.json())

app.use("/files",express.static(path.join(__dirname,"files")))
app.use('/course',coursRoute)
app.use("/student",userRoute)
app.use("/auth",authRoute)
app.use('/admin', adminRoute)
app.use('/category', categorieRoute)




app.listen(process.env.PORT || 5000)