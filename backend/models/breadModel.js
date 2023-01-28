const mongoose = require("mongoose");

const breadSchema = mongoose.Schema(
  {
    breadName: { type: "string", required: true },
    breadType: { type: "string", required: true },
    keyIngrediant: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Ingrediant",
    },
    stockQte: { type: "number", required: true },
    price: { type: "number", required: true },
    image: { type: "string", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bread", breadSchema);
