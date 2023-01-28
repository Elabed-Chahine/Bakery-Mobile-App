const mongoose = require('mongoose') ;



const ingrediantSchema = mongoose.Schema({
  keyIngrediant: { type: "string", required },
});

module.exports = mongoose.model(ingrediantSchema,'Ingrediant');