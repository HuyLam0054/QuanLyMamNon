const Student = require("../models/StudentModel")
const moment = require('moment');


const createStudent = (newStudent) => {
    return new Promise(async (resolve, reject) => {
        const { id, name, datebirth, sex, avatar, bhyt, note, parentName, cccd, avatarPR, relation, address, phone, email } = newStudent
        const formattedDate = moment.utc(datebirth, 'DD/MM/YYYY').toDate();        
        try {
            const checkStudent = await Student.findOne({
                _id : id
            })
            if (checkStudent !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The Student is already in Database'
                })
            }
            const newStudent = await Student.create({
                name, datebirth: formattedDate, sex, avatar, bhyt, note, parentName, cccd, avatarPR, relation, address, phone, email
            })
            if (newStudent) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newStudent
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateStudent = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkStudent = await Student.findOne({
                _id: id
            })
            if (checkStudent === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Student is not defined'
                })
            }

            const updatedStudent = await Student.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedStudent
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteStudent = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkStudent = await Student.findOne({
                _id: id
            })
            if (checkStudent === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Student is not defined'
                })
            }

            await Student.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Student success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsStudent = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const student = await Student.findOne({
                _id: id
            })
            if (student === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Student is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: student
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllStudent = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allStudent = await Student.find().sort({createdAt: -1, updatedAt: -1})
            const count = await Student.countDocuments();
            const study = await Student.countDocuments({status: 'Đang học'});
            const done = await Student.countDocuments({status: 'Hoàn thành'});
            resolve({
                status: 'OK',
                message: 'Success',
                data: allStudent,
                count: count,
                study: study,
                done: done,
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createStudent,
    updateStudent,
    getDetailsStudent,
    deleteStudent,
    getAllStudent,
}