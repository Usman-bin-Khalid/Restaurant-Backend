const userModel = require("../models/userModel");

// GET USER INFO
const getUserController = async (req, res) => {
    res.status(200).send("User Data");
    console.log(req.user._id);
}


module.exports = { getUserController };