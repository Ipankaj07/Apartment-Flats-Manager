const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
    society_name: { type: String, required: true },
    total_no_residents: { type: Number, required: true },
    flat_type: { type: String, required: true },
    BHK_type: { type: Array, required: true },
    block_names: { type: Array, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true },
    resident_details: { type: Array, required: true },
    flat_nos: { type: Array, required: true },
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("Flat", flatSchema);