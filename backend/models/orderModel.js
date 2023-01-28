const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    bread: { type: mongoose.Types.ObjectId, required: true, ref:"Bread" },
    Qte: {type: 'number', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
