const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createResturantController, getAllResturantController, getResturantByIdController } = require('../controllers/resturantController');

const router = express.Router();

//routes
// RESTURANT ROUTES || POST

router.post('/create' , authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET
router.get('/getAll' , getAllResturantController)


// GET RESTURANT BY ID || GET
router.get('/get/:id' , getResturantByIdController)
module.exports = router;