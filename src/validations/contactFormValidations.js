const { check:contactFormCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
contactFormcheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];