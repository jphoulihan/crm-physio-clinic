//CONFIG SCHEMA
const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new Schema(
  {
    date: { type: Date, required: true },
    time: {type: String, required: true},
    client_id: { type: String, required: true },
    physio_id: { type: String, required: true },
    fee: { type: String, required: true },
    number: { type: Number, required: true },
    duration: { type: Number, required: true },
    type: {
      type: String,
      enum: [
        "Assessment",
        "Massage Therapy",
        "Hydrotherapy",
        "Electrotherapy",
        "Rehabilitation",
        "Other",
      ],
      required: true,
    },
    other: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", sessionSchema);
