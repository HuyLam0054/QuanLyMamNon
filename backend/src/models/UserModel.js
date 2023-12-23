const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        sex: { type: Boolean, require:true },
        IDCard: { type: String, require:true},
        datebirth: { type: Date, require:true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        phone: { type: Number, required: true  },
        address: { type: String, required: true  },
        avatar: { type: String },
        status: {type: Boolean, default: true}
    },
    {
        timestamps: true
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;