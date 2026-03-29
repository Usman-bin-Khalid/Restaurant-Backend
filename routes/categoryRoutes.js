const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createCatController, getAllCatController } = require('../controllers/categoryController');
const router = express.Router();


// routes
// CREATE CATEGORY
router.post('/create', authMiddleware, createCatController);

// GET ALL CATEGORIES
router.get('/getAll', getAllCatController );

module.exports = router;
