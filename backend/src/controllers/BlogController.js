const BlogService = require('../services/BlogService')

const createBlog = async (req, res) => {
    try {
        const { name } = req.body
        if (!name ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await BlogService.createBlog(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateBlog = async (req, res) => {
    try {
        const BlogId = req.params.id
        const data = req.body
        if (!BlogId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The BlogId is required'
            })
        }
        const response = await BlogService.updateBlog(BlogId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsBlog = async (req, res) => {
    try {
        const BlogId = req.params.id
        if (!BlogId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The BlogId is required'
            })
        }
        const response = await BlogService.getDetailsBlog(BlogId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteBlog = async (req, res) => {
    try {
        const BlogId = req.params.id
        if (!BlogId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The BlogId is required'
            })
        }
        const response = await BlogService.deleteBlog(BlogId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllBlog = async (req, res) => {
    try {
        const {limit, page} = req.query
        const response = await BlogService.getAllBlog(Number(limit) || null, Number(page) || 0)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const response = await BlogService.getAllBlogs()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createBlog,
    updateBlog,
    getDetailsBlog,
    deleteBlog,
    getAllBlog,
    getAllBlogs
}