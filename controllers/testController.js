const testUserController = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: 'Test API User Data'
        });
    } catch (error) {
        console.log('Error in test API', error);
    }
};

module.exports = { testUserController };