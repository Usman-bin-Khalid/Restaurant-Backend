const userModel = require("../models/userModel");

// GET USER INFO
const getUserController = async (req, res) => {
    // res.status(200).send("User Data");
    // console.log(req.user._id);
    try {
      // find user
      const user = await userModel.findById({_id : req.user._id})
      //validation
      if (!user) {
        return res.status(404).send({success : false, message : "User not found"})
      }
    //   // hide password
    //   user.password = undefined;
      res.status(200).send({success : true, message : 'User data get successfully', user})
    } catch (error) {
        console.log(error);
        res.status(500).send({success : false, message : 'Error in get user API', error});
    }
    
}


module.exports = { getUserController };