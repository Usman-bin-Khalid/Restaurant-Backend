const express = require('express');
const { getUserController } = require('../controllers/userController');
const router = express.Router();


// ROUTES
// GET USER || GET
router.get('/gstUser', getUserController)
module.exports = router;