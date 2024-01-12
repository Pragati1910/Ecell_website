
const  = require("../models/contactFormModel.js")


//sample
const postName = async (name) => {
const result = await User.create({
name,
});
return result;
};
module.exports = {
postName,
};