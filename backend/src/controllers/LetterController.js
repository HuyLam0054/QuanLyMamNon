const LetterService = require('../services/LetterService')

const createLetter = async (req, res) => {
    try {
        const { name, reason, time, teacher  } = req.body
        if (!name || !reason || !time || !teacher) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LetterService.createLetter(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLetter = async (req, res) => {
    try {
        const LetterId = req.params.id
        const data = req.body
        if (!LetterId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The LetterId is required'
            })
        }
        const response = await LetterService.updateLetter(LetterId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLetter = async (req, res) => {
    try {
        const LetterId = req.params.id
        if (!LetterId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The LetterId is required'
            })
        }
        const response = await LetterService.getDetailsLetter(LetterId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLetter = async (req, res) => {
    try {
        const LetterId = req.params.id
        if (!LetterId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The LetterId is required'
            })
        }
        const response = await LetterService.deleteLetter(LetterId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLetter = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LetterService.getAllLetter(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getLetterByUser = async (req, res) => {
    try {
        const teacherID = req.params.id
        const response = await LetterService.getLetterByUser(teacherID)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLetter,
    updateLetter,
    getDetailsLetter,
    deleteLetter,
    getAllLetter,
    getLetterByUser
}