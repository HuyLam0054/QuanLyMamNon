const Blog = require("../models/BlogModel")

const createBlog = (newBlog) => {
    return new Promise(async (resolve, reject) => {
        const { name, summary, content, type, image, author, status } = newBlog
        try {
            const checkBlog = await Blog.findOne({
                name: name
            })
            if (checkBlog !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of Blog is already'
                })
            }
            const newBlog = await Blog.create({
                name, summary, content,image, author, type, status
            })
            if (newBlog) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newBlog
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateBlog = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBlog = await Blog.findOne({
                _id: id
            })
            if (checkBlog === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Blog is not defined'
                })
            }

            const updatedBlog = await Blog.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedBlog
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteBlog = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBlog = await Blog.findOne({
                _id: id
            })
            if (checkBlog === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Blog is not defined'
                })
            }

            await Blog.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Blog success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsBlog = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getBlog = await Blog.findOne({
                _id: id
            })
            if (getBlog === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Blog is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: getBlog
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllBlog = async (limit, page) => {
    try {
        const totalBlog = await Blog.countDocuments();
        const allBlog = await Blog.find()
            .sort({ createdAt: -1, updatedAt: -1 })
            .limit(limit)
            .skip(page * limit);

        return {
            status: 'OK',
            message: 'Success',
            data: allBlog,
            total: totalBlog,
            pageCurrent: Number(page + 1),
            totalPage: Math.ceil(totalBlog / limit),
        };
    } catch (e) {
        throw e;
    }
}

const getAllBlogs = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allBlog = await Blog.find().sort({createdAt: -1, updatedAt: -1})
            const total = await Blog.countDocuments();
            const news = await Blog.countDocuments({type: true})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allBlog,
                total: total,
                news: news
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createBlog,
    updateBlog,
    getDetailsBlog,
    deleteBlog,
    getAllBlog,
    getAllBlogs
}