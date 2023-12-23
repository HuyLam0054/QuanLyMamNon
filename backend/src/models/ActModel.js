const mongoose = require('mongoose')
const actMiddleware = require('../middleware/actMiddleware');

const activitieSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        dateStart: { type: Date, required:true },
        dateEnd: { type: Date, required:true },
        describe: { type: String },
        detail: { type: String },
        status: { type: String, enum: ['Chờ', 'Xong', 'Huỷ'], default: 'Chờ'},
    },
    {
        timestamps: true,
    }
);

activitieSchema.pre('remove', actMiddleware.preRemove);

const Activitie = mongoose.model('Activitie', activitieSchema);

module.exports = Activitie;