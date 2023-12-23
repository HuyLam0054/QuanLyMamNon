const ClassService = require('../services/ClassService')

const createClass = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ClassService.createClass(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateClass = async (req, res) => {
    try {
        const ClassId = req.params.id
        const data = req.body
        if (!ClassId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ClassId is required'
            })
        }
        const response = await ClassService.updateClass(ClassId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const addActToClass = async (req, res) => {
    try {
        const ClassId = req.params.id
        const data = req.body
        if (!ClassId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ClassId is required'
            })
        }
        const response = await ClassService.addActToClass(ClassId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const addStudentToClass = async (req, res) => {
    try {
        const ClassId = req.params.id
        const data = req.body
        if (!ClassId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ClassId is required'
            })
        }
        const response = await ClassService.addStudentToClass(ClassId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const removeActFromClass = async (req, res) => {
    try {
        const ClassId = req.params.id
        const data = req.body
        if (!ClassId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ClassId is required'
            })
        }
        const response = await ClassService.removeActFromClass(ClassId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const removeStudentFromClass = async (req, res) => {
    try {
        const ClassId = req.params.id
        const data = req.body
        if (!ClassId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ClassId is required'
            })
        }
        const response = await ClassService.removeStudentFromClass(ClassId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsClass = async (req, res) => {
    try {
        const classId = req.params.id
        if (!classId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ClassId is required'
            })
        }
        const response = await ClassService.getDetailsClass(classId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteClass = async (req, res) => {
    try {
        const classId = req.params.id
        if (!classId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The classId is required'
            })
        }
        const response = await ClassService.deleteClass(classId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllClass = async (req, res) => {
    try {
        const response = await ClassService.getAllClass()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: 'Lỗi không xác định'
        })
    }
}

const getClassByUser = async (req, res) => {
    try {
        const teacherID = req.params.id
        const response = await ClassService.getAllClassByUser(teacherID)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: 'Lỗi không xác định'
        })
    }
}

module.exports = {
    createClass,
    updateClass,
    addStudentToClass,
    removeStudentFromClass,
    addActToClass,
    removeActFromClass,
    getDetailsClass,
    getClassByUser,
    deleteClass,
    getAllClass,
}
