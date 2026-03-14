const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "Authorization token required",
      });
    }

    const token = authHeader.split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (error, decode) => {

      if (error) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized User",
        });
      }

      req.userId = decode.id;   // ✅ store id here
      next();

    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Please Provide Auth Token",
    });
  }
};