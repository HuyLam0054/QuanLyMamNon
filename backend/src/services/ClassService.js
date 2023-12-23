const Class = require("../models/ClassModel")
const moment = require('moment');
var mongoose = require('mongoose');

const createClass = (newClass) => {
    return new Promise(async (resolve, reject) => {
        const { id, name, status, dateStart, dateEnd, teacher, students, act } = newClass
        const formattedDateStart = moment.utc(dateStart, 'DD/MM/YYYY').toDate();
        const formattedDateEnd = moment.utc(dateEnd, 'DD/MM/YYYY').toDate();
        try {
            const checkClass = await Class.findOne({
                _id: id
            })
            if (checkClass !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The Class is already'
                })
            }
            const newClass = await Class.create({
                name, status, dateStart: formattedDateStart, dateEnd: formattedDateEnd, teacher, students, act
            })
            if (newClass) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newClass
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateClass = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkClass = await Class.findOne({
                _id: id
            })
            if (checkClass === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Class is not defined'
                })
            }

            const updatedClass = await Class.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedClass
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteClass = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkClass = await Class.findOne({
                _id: id
            })
            if (checkClass === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Class is not defined'
                })
            }

            await Class.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Class success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const addStudentToClass = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkClass = await Class.findById(id);
            if (!checkClass) {
                return reject({
                    status: 'ERR',
                    message: 'Class not found'
                });
            }

            // Chuyển đổi mảng các act thành mảng các ObjectId
            const changeToObject = data.students.map(item => new mongoose.Types.ObjectId(item));
            
            const addStudents = await Class.findByIdAndUpdate(
                id, 
                { $addToSet: { students: { $each: changeToObject } } },
                { new: true }
            );

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: addStudents
            });
        } catch (e) {
            console.error(e)
            reject(e);
        }
    });
};

const addActToClass = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkClass = await Class.findById(id);
            if (!checkClass) {
                return reject({
                    status: 'ERR',
                    message: 'Class not found'
                });
            }

            // Chuyển đổi mảng các act thành mảng các ObjectId
            const changeToObject = data.act.map(item => new mongoose.Types.ObjectId(item));
            
            const addAct = await Class.findByIdAndUpdate(
                id, 
                { $addToSet: { act: { $each: changeToObject } } },
                { new: true }
            );

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: addAct
            });
        } catch (e) {
            console.error(e)
            reject(e);
        }
    });
};

const removeStudentFromClass = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkClass = await Class.findById(id);
            if (!checkClass) {
                return reject({
                    status: 'ERR',
                    message: 'Class not found'
                });
            }

            const removeStudent = await Class.findByIdAndUpdate(
                id,
                { $pull: { students: { $in: data } } },
                { new: true }
            );

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: removeStudent
            });
        } catch (e) {
            console.error(e);
            reject(e);
        }
    });
};

const removeActFromClass = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkClass = await Class.findById(id);
            if (!checkClass) {
                return reject({
                    status: 'ERR',
                    message: 'Class not found'
                });
            }
            const removeAct = await Class.findByIdAndUpdate(
                id, 
                { $pull: { act: { $in: data} } },
                { new: true }
            );

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: removeAct
            });
        } catch (e) {
            console.error(e)
            reject(e);
        }
    });
};

const getAllClass = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allClass = await Class.find()
                .sort({createdAt: -1, updatedAt: -1})
                .populate('teacher', 'name email avatar')
                .populate('students', 'name')
                .populate('act', 'name')
                .exec();

            const totalCount = await Class.countDocuments();
            const open = await Class.countDocuments({ status: true });
            resolve({
                status: 'OK',
                message: 'Success',
                total: totalCount,
                open:open,
                data: allClass
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllClassByUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allClass = await Class.find({ teacher: id })
                .sort({createdAt: -1, updatedAt: -1})
                .populate('act')
                .populate('students', 'name datebirth parentName phone email avatar avatarPR')
                .exec();
            resolve({
                status: 'OK',
                message: 'Success',
                data: allClass
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsClass = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const clss = await Class.findOne({
                _id: id
            }).populate('teacher','name')
            .populate('students', '-avatar -avatarPR')
            .populate('act')
           
            if (clss === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: clss
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createClass,
    updateClass,
    getDetailsClass,
    addStudentToClass,
    removeStudentFromClass,
    addActToClass,
    removeActFromClass,
    deleteClass,
    getAllClass,
    getAllClassByUser
}