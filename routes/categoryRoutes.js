const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createCatController, getAllCatController , updateCatController} = require('../controllers/categoryController');
const router = express.Router();


// routes
// CREATE CATEGORY
router.post('/create', authMiddleware, createCatController);

// GET ALL CATEGORIES
router.get('/getAll', getAllCatController );

// UPDATE CATEGORY
router.put('/update/:id', authMiddleware, updateCatController);

module.exports = router;
