const express = require("express");
const router = express.Router()
const LetterController = require('../controllers/LetterController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LetterController.createLetter)
router.put('/update/:id', LetterController.updateLetter)
router.get('/detail/:id', authUserMiddleWare, LetterController.getDetailsLetter)
router.delete('/delete/:id', authMiddleWare, LetterController.deleteLetter)

router.get('/get-all', authMiddleWare, LetterController.getAllLetter)

router.get('/get-by-user/:id', authUserMiddleWare, LetterController.getLetterByUser)

module.exports = router