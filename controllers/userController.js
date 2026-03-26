const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

// GET USER INFO
const getUserController = async (req, res) => {
  // res.status(200).send("User Data");
  // console.log(req.user._id);
  try {
    // find user
    const user = await userModel.findById({ _id: req.user._id })
    //validation
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" })
    }
    //   // hide password
    //   user.password = undefined;
    res.status(200).send({ success: true, message: 'User data get successfully', user })
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Error in get user API', error });
  }

}




// UPDATE USER
const updateUserController = async (req, res) => {
  try {
    // find user
    const user = await userModel.findById(req.user._id);
    // validation
    if (!user) {
      return res.status(404).send({ success: false, message: 'User Not Found' });
    }
    // update
    const { userName, address, phone } = req.body || {};
    if (!req.body) {
      return res.status(400).send({ success: false, message: "Request body is required"});
    }
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    // save user
    await user.save();
    res.status(200).send({ success: true, message: 'User Updated Successfully', user });

  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Error In Update Profile API', error });
  }

}


// RESET PASSWORD
const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    if (!email || !newPassword || !answer) {
      return res.status(500).send({ success: false, message: 'Please Provide all fields' });
    }
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(500).send({ success: false, message: 'User Not Found or Invalid Answer' });

    }
    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashPassword;
    await user.save();
    res.status(200).send({ success: true, message: "Password Reset Successfully", user });

  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Error in reset password API', error });
  }
}



// UPDATE USER PASSWORD
const updatePasswordController = async (req, res) => {
  try {
    // find User
    const user = await userModel.findById({_id : req.user._id});
    // validation
    if (!user) {
      return res.status(404).send({success : false, message : 'User Not Found'});

    }
    // get data from User
    const {oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(500).send({success : false,
        message : 'Please Provide Old or New Password',
        error,

      });
    }
    // Check user Password || Compare Password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(500).send({success : false, message : 'Invalid Old Password'});
    }
    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword =  await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({success : true, message : 'Password Updated'});

  } catch (error) {
    console.log(error);
    res.status(500).send({success : false, message : 'Error in Password Update API', error});
  }
}

// DELETE PROFILE ACCOUNT
const deleteProfileAController = async (req, res) => {
  try {
   await userModel.findByIdAndDelete(req.params.id);
   return res.status(200).send({success : true, message : 'Account Deleted Successfully'})
  } catch (error) {
    console.log(error);
    res.status(500).send({success : false, message : 'Error in Delete Profile API', error});
  }

}




module.exports = { getUserController, updateUserController, resetPasswordController , updatePasswordController , deleteProfileAController};