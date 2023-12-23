const { check:superusersCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
superuserscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];