const LCT = require("../models/LCTModel")

const createLCT = (newLCT) => {
    return new Promise(async (resolve, reject) => {
        const { name, content, status } = newLCT
        try {
            const checkLCT = await LCT.findOne({
                name: name
            })
            if (checkLCT !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of LCT is already'
                })
            }
            const newLCT = await LCT.create({
                name, content, status
            })
            if (newLCT) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLCT
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLCT = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLCT = await LCT.findOne({
                _id: id
            })
            if (checkLCT === null) {
                resolve({
                    status: 'ERR',
                    message: 'The LCT is not defined'
                })
            }

            const updatedLCT = await LCT.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLCT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLCT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLCT = await LCT.findOne({
                _id: id
            })
            if (checkLCT === null) {
                resolve({
                    status: 'ERR',
                    message: 'The LCT is not defined'
                })
            }

            await LCT.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete LCT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLCT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getLCT = await LCT.findOne({
                _id: id
            })
            if (getLCT === null) {
                resolve({
                    status: 'ERR',
                    message: 'The LCT is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: getLCT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLCTs = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allLCT = await LCT.find().sort({createdAt: -1, updatedAt: -1})
            const total = await LCT.countDocuments();
            const open = await LCT.countDocuments({status:true});
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLCT,
                total: total,
                open: open
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createLCT,
    updateLCT,
    getDetailsLCT,
    deleteLCT,
    getAllLCTs
}