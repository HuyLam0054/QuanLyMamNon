const express = require("express");
const router = express.Router()
const StudentController = require('../controllers/StudentController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', authMiddleWare, StudentController.createStudent)
router.put('/update/:id', authMiddleWare, StudentController.updateStudent)
router.get('/detail/:id', authUserMiddleWare, StudentController.getDetailsStudent)
router.delete('/delete/:id', authMiddleWare, StudentController.deleteStudent)
router.get('/get-all', authMiddleWare, StudentController.getAllStudent)

module.exports = router