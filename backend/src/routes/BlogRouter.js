const express = require("express");
const router = express.Router()
const BlogController = require('../controllers/BlogController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', authMiddleWare, BlogController.createBlog)
router.put('/update/:id', authMiddleWare, BlogController.updateBlog)
router.get('/detail/:id', BlogController.getDetailsBlog)
router.delete('/delete/:id', authMiddleWare, BlogController.deleteBlog)

router.get('/get-limit', BlogController.getAllBlog)
router.get('/get-all', BlogController.getAllBlogs)

module.exports = router