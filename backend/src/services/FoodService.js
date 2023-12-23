const Food = require("../models/FoodModel")

const createFood = (newFood) => {
    return new Promise(async (resolve, reject) => {
        const { name, menu, status } = newFood
        try {
            const checkFood = await Food.findOne({
                name: name
            })
            if (checkFood !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of Food is already'
                })
            }
            const newFood = await Food.create({
                name, menu, status
            })
            if (newFood) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newFood
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateFood = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkFood = await Food.findOne({
                _id: id
            })
            if (checkFood === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Food is not defined'
                })
            }

            const updatedFood = await Food.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedFood
            })
        } catch (e) {
            reject(e)
        }
    })
}

const updateMenu = (id, menuId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkMenu = await Food.findOne({
                _id: id,
                'menu._id': menuId
            });

            if (checkMenu === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Menu is not defined'
                });
            }

            const updatedMenu = await Food.findByIdAndUpdate(
                id,
                { $set: { 'menu.$[elem]': data } },
                { arrayFilters: [{ 'elem._id': menuId }], new: true }   
            );

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedMenu
            });
        } catch (e) {
            reject(e);
        }
    });
};

const deleteFood = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkFood = await Food.findOne({
                _id: id
            })
            if (checkFood === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Food is not defined'
                })
            }

            await Food.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Food success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsFood = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getFood = await Food.findOne({
                _id: id
            })
            if (getFood === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Food is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: getFood
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllFoods = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allFood = await Food.find().sort({createdAt: -1, updatedAt: -1})
            const total = await Food.countDocuments();
            const open = await Food.countDocuments({status:true});
            resolve({
                status: 'OK',
                message: 'Success',
                data: allFood,
                total: total,
                open: open
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createFood,
    updateFood,
    updateMenu,
    getDetailsFood,
    deleteFood,
    getAllFoods
}