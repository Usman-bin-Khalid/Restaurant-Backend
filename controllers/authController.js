const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;
    // validation
    if (!userName || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "Please fill all the fields",
      });
    }
    // existing user
    const existing = await userModel.findOne({
      email,
    });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "User already exists",
      });
    }
    // create new User
    const user = await userModel.create({
      userName,
      email,
      password,
      phone,
      address,
    });
    res
      .status(201)
      .send({ success: true, message: "Successfully Registerd", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
    });
  }
};

const loginController = async (req, res) => {
    try { 
         const {email, password} = req.body;
         // validation
         if (!email || !password) {
            return res.status(500).send({
                success : false,
                message : 'Please fill all the fields',

            });
         }
         // check user
         const user = await userModel.findOne({
            email,

         });
         if (!user) {
            return res.status(404).send({
                success : false,
                message : 'Email is not registered',

            })
         };
         res.status(200).send({
            success : true,
            message : 'Login Successfully',
            user,
         })
 
    } catch (error) {
     console.log(error);
     res.status(500).send({
        success : false,
        message : 'Error in Login API',
        error,
     })
    }

}

module.exports = { registerController , loginController};