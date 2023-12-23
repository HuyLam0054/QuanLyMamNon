const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        menu: [{
            date: { type: String, required: true },
            morning: {type: String, default: ''},
            lunch: {type: String, default: '' },
            afternoon:{ type: String, default: '' },
        }],
        status: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;