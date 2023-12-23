const mongoose = require('mongoose');

const LCTSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique:true },
        content: { type: String, required: true },
        status: { type: Boolean, default: false }
    },
    {
        timestamps: true,
    }
);

const LCT = mongoose.model('LCT', LCTSchema);

module.exports = LCT;