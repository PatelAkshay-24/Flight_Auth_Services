const express = require('express')
const app = express()
app.use(express.json())
const bodyparser = require('body-parser')
const sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

//port
const { PORT, DB_SYNC } = require("./config/serverconfig");
//router
const ApiRoutes = require('./routes/index')

const startServer = (req,res)=>{

    app.use('/api',ApiRoutes)

    app.listen(PORT,async()=>{
        console.log(`server is start on http://localhost:${PORT}`);
    })
}

startServer()

