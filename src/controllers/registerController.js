const { User } = require("../models/user");
const bcrypt = require('bcrypt');


const registerController = (req,res)=>{
  //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
  User.findOne({email:req.body.email},(err,user)=>{
    
    if(user == null){
        const saltRounds = 15;
        let encrypass = bcrypt.hashSync(req.body.password_hash, saltRounds);;
        req.body.password_hash = encrypass;

        
        const user = new User(req.body);
        user.save().then(d => {
            res.status(200).json({
                msg:'User register successfully'
            });
        }).catch(e=>{
            res.status(400).json({
                msg:'error'
            });
        });
        
    }else{
        res.status(404).json({
            msg:"user is alredy registerd"
        })
    }

  })
    

}
exports.registerController=registerController;