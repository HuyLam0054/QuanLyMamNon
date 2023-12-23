const express = require("express");
const router = express.Router()
const FoodController = require('../controllers/FoodController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', authMiddleWare, FoodController.createFood)
router.put('/update/:id', authMiddleWare, FoodController.updateFood)
router.put('/updateMenu/:id/:menuId', authMiddleWare, FoodController.updateMenu)
router.get('/detail/:id', FoodController.getDetailsFood)
router.delete('/delete/:id', authMiddleWare, FoodController.deleteFood)

router.get('/get-all', FoodController.getAllFoods)

module.exports = router