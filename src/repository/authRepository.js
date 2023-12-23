const  user = require("../models/authModel")
const login = async (email) => {
    try {
       const result = await User.findOne({ email: email });
       if (result && result.isapproved === true) {
         return result;
       } else {
         throw new Error('User not found or not approved');
       }
    } catch (error) {
       throw error;
    }
   };
   module.exports = {
    login,
  };