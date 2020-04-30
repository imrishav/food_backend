const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resturantSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A name is required.."]
  },
  cusines: {
    type: String
  },
  address: {
    type: String
  },
  imageCover: {
    type: String
  },
  images: [String],
  description: {
    type: String
  },
  //   menu: [String],  later Implementation
  //   reviews: [String],
  extraInfo: [String],
  isActive: { type: Boolean, default: true },
  isOpen: { type: Boolean, default: false }
});

const Resturant = mongoose.model("Resturant", resturantSchema);

module.exports = Resturant;
