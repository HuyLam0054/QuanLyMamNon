const express = require("express");
const router = express.Router()
const Activities = require('../controllers/ActController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', authMiddleWare, Activities.createAct)
router.put('/update/:id', authMiddleWare, Activities.updateAct)
router.get('/detail/:id', authUserMiddleWare, Activities.getDetailsAct)
router.delete('/delete/:id', authMiddleWare, Activities.deleteAct)
router.get('/get-all', authMiddleWare, Activities.getAllAct)

module.exports = router