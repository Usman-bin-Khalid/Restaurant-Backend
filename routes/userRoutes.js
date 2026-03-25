const express = require('express');
const { getUserController, updateUserController, resetPasswordController, updatePasswordController, deleteProfileAController } = require('../controllers/userController');
const authMiddleWare = require('../middlewares/authMiddleWare');

const router = express.Router();


// ROUTES
// GET USER || GET
router.get('/getUser', authMiddleWare, getUserController);
// UPDATE USER || PUT
router.put('/updateUser', authMiddleWare, updateUserController);
// RESET PASSWORD || POST
router.post('/resetPassword', authMiddleWare, resetPasswordController);

router.post('/updatePassword' ,authMiddleWare, updatePasswordController );
router.delete('/deleteUser/:id/', authMiddleWare, deleteProfileAController)
module.exports = router;