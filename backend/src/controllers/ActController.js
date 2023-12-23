const ActService = require('../services/ActService')

const createAct = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ActService.createAct(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateAct = async (req, res) => {
    try {
        const ActId = req.params.id
        const data = req.body
        // const ClassId = req.class.id
        if (!ActId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ActId is required'
            })
        }
        const response = await ActService.updateAct(ActId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const addClass = async (req, res) => {
    try {
        const ActId = req.params.id
        const idc = req.class.id
        if (!ActId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ActId is required'
            })
        }
        const response = await ActService.addClass(ActId, idc)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsAct = async (req, res) => {
    try {
        const ActId = req.params.id
        if (!ActId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ActId is required'
            })
        }
        const response = await ActService.getDetailsAct(ActId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteAct = async (req, res) => {
    try {
        const ActId = req.params.id
        if (!ActId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ActId is required'
            })
        }
        const response = await ActService.deleteAct(ActId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllAct = async (req, res) => {
    try {
        const response = await ActService.getAllAct()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createAct,
    updateAct,
    addClass,
    getDetailsAct,
    deleteAct,
    getAllAct,
}