const mongoose = require('mongoose');
const Class = require('../models/ClassModel');

const actMiddleware = {};

actMiddleware.preRemove = async function (next) {
    const actId = this._id;

    try {
        await Class.updateMany({ act: actId }, { $pull: { act: actId } });
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = actMiddleware;
