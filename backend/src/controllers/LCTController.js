const LCTService = require('../services/LCTService')

const createLCT = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LCTService.createLCT(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLCT = async (req, res) => {
    try {
        const LCTId = req.params.id
        const data = req.body
        if (!LCTId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The LCTId is required'
            })
        }
        const response = await LCTService.updateLCT(LCTId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLCT = async (req, res) => {
    try {
        const LCTId = req.params.id
        if (!LCTId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The LCTId is required'
            })
        }
        const response = await LCTService.getDetailsLCT(LCTId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLCT = async (req, res) => {
    try {
        const LCTId = req.params.id
        if (!LCTId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The LCTId is required'
            })
        }
        const response = await LCTService.deleteLCT(LCTId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLCT = async (req, res) => {
    try {
        const {limit, page} = req.query
        const response = await LCTService.getAllLCT(Number(limit) || null, Number(page) || 0)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLCTs = async (req, res) => {
    try {
        const response = await LCTService.getAllLCTs()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLCT,
    updateLCT,
    getDetailsLCT,
    deleteLCT,
    getAllLCT,
    getAllLCTs
}