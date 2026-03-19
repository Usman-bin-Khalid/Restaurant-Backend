const JWT = require("jsonwebtoken");



module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).send({
                success: false,
                message: 'Please provide auth token'
            });
        }
        const token = authHeader.split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: 'Unauthorized User'
                })
            } else {
                req.user = decode;
                req.userId = decode._id;
                next();
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Auth API',
            error,
        });
    }
}





