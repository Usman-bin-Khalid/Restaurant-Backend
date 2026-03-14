const userModel = require("../models/userModel");

// GET USER INFO
const getUserController = async (req, res) => {
  try {

    const user = await userModel.findById(req.userId).select("-password");

    res.status(200).send({
      success: true,
      message: "User data fetched successfully",
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get User API",
      error,
    });
  }
};

module.exports = { getUserController };