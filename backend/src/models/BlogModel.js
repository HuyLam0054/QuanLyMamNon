const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique:true },
        summary: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String },
        author: { type: String, required: true },
        type: { type: Boolean, default: true },
        status: { type: Boolean, default: true }
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;