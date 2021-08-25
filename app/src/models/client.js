//CONFIG SCHEMA
const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeAddress = new Schema({
  add_line_1: { type: String, required: true },
  add_line_2: String,
  town: { type: String, required: true },
  county_city: { type: String, required: true },
  eircode: String,
});

const clientDetailsSchema = new Schema({
  title: String,
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  mobile: { type: String, required: true },
  phone: String,
  email: { type: String, required: true },
  address: homeAddress,
});

module.exports = mongoose.model("Client", clientDetailsSchema);
