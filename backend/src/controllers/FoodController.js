const FoodService = require('../services/FoodService')

const createFood = async (req, res) => {
    try {
        const { name } = req.body
        if (!name ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await FoodService.createFood(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateFood = async (req, res) => {
    try {
        const FoodId = req.params.id
        const data = req.body
        if (!FoodId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The FoodId is required'
            })
        }
        const response = await FoodService.updateFood(FoodId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateMenu = async (req, res) => {
    try {
        const foodId = req.params.id;
        const menuId = req.params.menuId;
        const data = req.body;

        if (!foodId || !menuId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Both FoodId and MenuId are required'
            });
        }

        const response = await FoodService.updateMenu(foodId, menuId, data);

        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            status: 'ERR',
            message: e.message || 'Internal Server Error'
        });
    }
};

const getDetailsFood = async (req, res) => {
    try {
        const FoodId = req.params.id
        if (!FoodId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The FoodId is required'
            })
        }
        const response = await FoodService.getDetailsFood(FoodId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteFood = async (req, res) => {
    try {
        const FoodId = req.params.id
        if (!FoodId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The FoodId is required'
            })
        }
        const response = await FoodService.deleteFood(FoodId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllFoods = async (req, res) => {
    try {
        const response = await FoodService.getAllFoods()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createFood,
    updateFood,
    updateMenu,
    getDetailsFood,
    deleteFood,
    getAllFoods
}