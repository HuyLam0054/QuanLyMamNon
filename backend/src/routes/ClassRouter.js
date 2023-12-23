const express = require("express");
const router = express.Router()
const ClassController = require('../controllers/ClassController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', authMiddleWare, ClassController.createClass)
router.put('/update/:id', authMiddleWare, ClassController.updateClass)

router.post('/add-act/:id', authMiddleWare, ClassController.addActToClass)
router.post('/add-student/:id', authMiddleWare, ClassController.addStudentToClass)

router.delete('/remove-act/:id', authMiddleWare, ClassController.removeActFromClass)
router.delete('/remove-student/:id', authMiddleWare, ClassController.removeStudentFromClass)

router.delete('/delete/:id', authMiddleWare, ClassController.deleteClass)
router.get('/get-all', authMiddleWare, ClassController.getAllClass)

router.get('/detail/:id', authUserMiddleWare, ClassController.getDetailsClass)
router.get('/get-by-user/:id', authUserMiddleWare, ClassController.getClassByUser)

module.exports = router