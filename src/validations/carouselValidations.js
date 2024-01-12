const { check:carouselCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
carouselcheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];