const Activitie = require("../models/ActModel")
const moment = require('moment');


const createAct = (newAct) => {
    return new Promise(async (resolve, reject) => {
        const { name, dateStart, dateEnd, describe, detail, status } = newAct
        const formattedDateStart = moment.utc(dateStart, 'DD/MM/YYYY').toDate();
        const formattedDateEnd = moment.utc(dateEnd, 'DD/MM/YYYY').toDate();
        try {
            const checkAct = await Activitie.findOne({
                name: name
            })
            if (checkAct !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of Act is already'
                })
            }
            const newAct = await Activitie.create({
                name, dateStart: formattedDateStart, dateEnd: formattedDateEnd, describe, detail, status
            })
            if (newAct) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newAct
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateAct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAct = await Activitie.findOne({
                _id: id
            })
            if (checkAct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Act is not defined'
                })
            }

            const updatedAct = await Activitie.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedAct
            })
        } catch (e) {
            reject(e)
        }
    })
}

const addClass = (id, idc) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAct = await Activitie.findOne({
                _id: id
            })
            if (checkAct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Act is not defined'
                })
            }

            const updatedAct = await Activitie.findByIdAndUpdate(id, { $push: {class: idc}}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedAct
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteAct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAct = await Activitie.findOne({
                _id: id
            })
            if (checkAct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Act is not defined'
                })
            }

            await Activitie.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Act success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsAct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const act = await Activitie.findOne({
                _id: id
            })
            if (act === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: act
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllAct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allAct = await Activitie.find().sort({createdAt: -1, updatedAt: -1})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allAct
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createAct,
    updateAct,
    getDetailsAct,
    deleteAct,
    getAllAct,
    addClass
}