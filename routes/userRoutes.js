const express = require('express');
const { getUserController } = require('../controllers/userController');
const authMiddleWare = require('../middlewares/authMiddleWare');
const router = express.Router();


// ROUTES
// GET USER || GET
router.get('/getUser', authMiddleWare,  getUserController);  
module.exports = router;