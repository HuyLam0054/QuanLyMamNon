const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', userController.createUser)
router.post('/login', userController.loginUser)
router.post('/logout', userController.logoutUser)

router.put('/update/:id', authUserMiddleWare, userController.updateUser)
router.delete('/delete/:id', authMiddleWare, userController.deleteUser)
router.get('/get-all', authMiddleWare, userController.getAllUser)

router.get('/detail/:id', authUserMiddleWare, userController.getDetailsUser)
router.post('/refreshtoken', userController.refreshToken)

module.exports = router