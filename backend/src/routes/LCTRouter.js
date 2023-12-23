const express = require("express");
const router = express.Router()
const LCTController = require('../controllers/LCTController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LCTController.createLCT)
router.put('/update/:id', authMiddleWare, LCTController.updateLCT)
router.delete('/delete/:id', authMiddleWare, LCTController.deleteLCT)
router.get('/get-all', LCTController.getAllLCTs)
router.get('/detail/:id', LCTController.getDetailsLCT)

module.exports = router