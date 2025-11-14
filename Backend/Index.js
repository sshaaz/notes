require('dotenv').config()
const express = require('express')
const RunServer = require("./Database/connection");
const cors = require('cors');
const noteRoutes =require('./Routes/noteRoutes');

const app = express()
const PORT =process.env.PORT;


app.use(express.json())
app.use(cors())


RunServer()

app.use('/api',noteRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}🛜`)
})