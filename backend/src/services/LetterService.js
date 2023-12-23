const Letter = require("../models/LetterModel")
const moment = require('moment');

const createLetter = (newLetter) => {
    return new Promise(async (resolve, reject) => {
        const { name, time, reason, teacher } = newLetter
        const formattedDate = moment.utc(time, 'DD/MM/YYYY').toDate();
        try {
            const checkLetter = await Letter.findOne({
                name: name
            })
            if (checkLetter !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The Letter is already'
                })
            }
            const newLetter = await Letter.create({
                name, time: formattedDate, reason, teacher
            })
            if (newLetter) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLetter
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLetter = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLetter = await Letter.findOne({
                _id: id
            })
            if (checkLetter === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Letter is not defined'
                })
            }

            const updatedLetter = await Letter.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLetter
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLetter = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLetter = await Letter.findOne({
                _id: id
            })
            if (checkLetter === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Letter is not defined'
                })
            }

            await Letter.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Letter success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLetter = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const Letter = await Letter.findOne({
                _id: id
            })
            if (Letter === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Letter is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: Letter
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLetter = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allLetter = await Letter.find().sort({createdAt: -1, updatedAt: -1}).populate('teacher', 'name email phone')
            const count = await Letter.countDocuments();
            const numWait = await Letter.countDocuments({ status: 'Chờ' });
            const numOK = await Letter.countDocuments({ status: 'Duyệt' });
            const numCancel = await Letter.countDocuments({ status: 'Huỷ' });
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLetter,
                count: count,
                numWait: numWait,
                numOK: numOK,
                numCancel: numCancel
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getLetterByUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allLetterUser = await Letter.find({ teacher: id }).sort({createdAt: -1, updatedAt: -1})
            const count = await Letter.countDocuments();
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLetterUser,
                count: count,
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createLetter,
    updateLetter,
    getDetailsLetter,
    deleteLetter,
    getAllLetter,
    getLetterByUser
}