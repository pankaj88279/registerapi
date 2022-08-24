const {mongoose } = require("../config/db");
var userSechma = {   //JS Object
    firstname: {
        type: String,
        required:true
    },
    lastname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password_hash:String,
    role: String
 };

const User = mongoose.model('User',userSechma);
exports.User=User;