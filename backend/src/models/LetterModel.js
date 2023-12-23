const mongoose = require('mongoose')

const letterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        reason: { type: String, default: 'Bệnh tật'},
        time:{ type: Date, required: true },
        status: { type: String, enum: ['Chờ', 'Duyệt', 'Huỷ', 'Từ chối'], default: 'Chờ'},
        teacher:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    }
);
const Letter = mongoose.model('Letter', letterSchema);

module.exports = Letter;