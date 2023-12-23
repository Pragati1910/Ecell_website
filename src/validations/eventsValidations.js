const { check:eventsCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
eventscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];