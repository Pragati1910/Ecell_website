const { check:userCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
usercheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];