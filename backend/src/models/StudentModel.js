const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
    {
        name: { type: String, require:true},
        datebirth: { type: Date, require:true },
        sex: { type: Boolean, require:true },
        avatar: { type: String },
        height: { type: Number },
        weight: { type: Number },
        bhyt: { type: String },
        note: { type: String },
        parentName: { type: String, require:true },
        cccd: { type: String, require:true },
        avatarPR: { type: String },
        relation:{ type: String, require:true },
        status : { type: String , default:'Đang học', enum: ['Đang học', 'Hoàn thành', 'Nghỉ học'] },
        address: { type: String, require:true },
        phone: { type: Number, require:true },
        email: {type: String, require:true }
    },
    {
        timestamps: true,
    }
);
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;