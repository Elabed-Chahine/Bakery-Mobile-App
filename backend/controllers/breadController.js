
const asyncHandler = require("express-async-handler");
const Bread = require('../models/breadModel')
/* get request
getting bread and Prices and data from database
Route: gttp://localhost:Port/api/bread/     */

const getHomeData = asyncHandler(async (req, res) => {
    const bread = await Bread.find()

    if(bread){
        res.status(200).json(bread)
    }
});


/* Post request to 
gttp://localhost:Port/api/bread/addstock */
const addDailyStock =  asyncHandler( async (req,res) => {
    const { breadName, breadType, stockQte, price, image, keyIngrediant } =
      req.body;
    console.log('in the daily stock')

    if(!breadName || !breadType || !stockQte || !price || !image){
        throw new Error("fill in all required fields")
    }

     const bread = await Bread.create({
       breadName: breadName,
       breadType: breadType,
       stockQte: stockQte,
       price: price,
       image: image,
       keyIngrediant:keyIngrediant,
     });
    res.status(200)
    res.json(bread)
    
    

})

module.exports = {getHomeData,addDailyStock} ;