const StudentService = require('../services/StudentService')

const createStudent = async (req, res) => {
    try {
        const { name, datebirth, sex, parentName, relation, address, phone, email } = req.body
        if (!name || !datebirth || !sex || !parentName || !relation || !address || !phone || !email) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await StudentService.createStudent(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateStudent = async (req, res) => {
    try {
        const StudentId = req.params.id
        const data = req.body
        if (!StudentId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The StudentId is required'
            })
        }
        const response = await StudentService.updateStudent(StudentId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsStudent = async (req, res) => {
    try {
        const StudentId = req.params.id
        if (!StudentId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The StudentId is required'
            })
        }
        const response = await StudentService.getDetailsStudent(StudentId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteStudent = async (req, res) => {
    try {
        const StudentId = req.params.id
        if (!StudentId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The StudentId is required'
            })
        }
        const response = await StudentService.deleteStudent(StudentId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllStudent = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await StudentService.getAllStudent(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createStudent,
    updateStudent,
    getDetailsStudent,
    deleteStudent,
    getAllStudent,
}