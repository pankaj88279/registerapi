const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.4gb2s.mongodb.net/?retryWrites=true&w=majority`)
.then((s)=>{
    console.log("conected")
}).catch((e)=>{
    console.log("error")
})
exports.mongoose=mongoose;