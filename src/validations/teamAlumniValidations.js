const { check:teamAlumniCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
teamAlumnicheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];