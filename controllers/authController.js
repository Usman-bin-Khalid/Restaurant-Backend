const registerController = (req , res) => {
  try {
      const 
  } catch (error ) {
    console.log(error);
    res.status(500).send({
        success : false,
        message : 'Error in Register API'
    })
  }
}


module.exports = {registerController}