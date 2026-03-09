const registerController = async (req , res) => {
  try {
      const {username, email, password, phone, address} = req.body;
      // validation
      if (!username || !email || !password || !phone || !address) {
        return res.status(500).send({
            success : false,
            message : 'Please fill all the fields',
        })
      }
      // existing user
      const existing = await User.findOne({
        email})
        if (existing) {
            return res.status(500).send({
                success : false,
                message : 'User already exists',
            }) 
        }
        // create new Uesr
        const user = await userModel.create({
            username, email, password, phone, address
        });
        res.status(201).send({success : true, message : 'Successfully Registerd' , user});
  } catch (error ) {
    console.log(error);
    res.status(500).send({
        success : false,
        message : 'Error in Register API'
    })
  }
}


module.exports = {registerController}