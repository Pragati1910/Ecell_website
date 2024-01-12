const mongoose = require("mongoose");

const carouselSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Please provide image '],
      },

})

module.exports = mongoose.model("Carousel", carouselSchema);