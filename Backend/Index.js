require('dotenv').config()
const express = require('express')
const RunServer = require("./Database/connection");
const cors = require('cors');
const noteRoutes =require('./Routes/noteRoutes');

const app = express()
const PORT =process.env.PORT || 5000;


app.use(express.json())

app.use(cors({
    origin: ["http://localhost:5173", "https://notes-frtend.onrender.com/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


RunServer()

app.use('/api',noteRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}🛜`)
})