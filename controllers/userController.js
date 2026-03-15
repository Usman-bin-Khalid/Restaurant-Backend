const userModel = require("../models/userModel");

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
      return res.status(400).send({ success: false, message: "Request body is required" });
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


module.exports = { getUserController, updateUserController };