const express = require('express');
const { getUserController, updateUserController } = require('../controllers/userController');
const authMiddleWare = require('../middlewares/authMiddleWare');
const router = express.Router();


// ROUTES
// GET USER || GET
router.get('/getUser', authMiddleWare,  getUserController);  
router.put('/updateUser', authMiddleWare, updateUserController )
module.exports = router;