const registerController = (req , res) => {
  try {
      const {username, email, password, phone, address} = req.body;
      // validation
      if (!username || !email || !password || !phone || !address) {
        
      }
  } catch (error ) {
    console.log(error);
    res.status(500).send({
        success : false,
        message : 'Error in Register API'
    })
  }
}


module.exports = {registerController}