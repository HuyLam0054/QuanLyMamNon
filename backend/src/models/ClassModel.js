const mongoose = require('mongoose')

const classSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        status: { type: Boolean, default: false},
        dateStart: { type: Date, require:true },
        dateEnd: { type: Date, require:true },
        teacher:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
        act: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activitie' }]
    },
    {
        timestamps: true,
    }
);
const Class = mongoose.model('Class', classSchema);

module.exports = Class;