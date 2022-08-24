const express = require('express');
const { registerRoute } = require('./routes/registerRoute');
const app = express();
require('dotenv').config();


//routes
app.use(express.json());
app.use("/api",registerRoute)

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("the port is running on "+port)
})