const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')
const Bread = require('../models/breadModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const { $where } = require('../models/orderModel')

const placeOrder = asyncHandler( async(req,res) => {
    const {Qte}=req.body

    const order = await Order.create({user:req.user, bread:req.params.id,Qte:Qte})

    let newstock = await Bread.findById(req.params.id)
    const stock = newstock.stockQte - Qte

    const updated = await Bread.findByIdAndUpdate(newstock.id,{stockQte:stock},{new:true})

    res.status(200).json({order, ordered:updated})

})

const getOrders = asyncHandler(async(req,res)=>{


    const{id}= req.params;
    const Orders = await Order.find({user:req.user.id})
    const user = await User.findById(id)
    const bread = await Bread.findById(Orders)
    res.status(200).json({Orders})

})


const registerUser = asyncHandler(async(req,res) => {
    const {username,email,password} = req.body

    if(!username || !email || !password){
        throw new Error('please fill in all credentials')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const exists = await User.findOne({email:email})

    if(exists) {
        res.status(401)
        throw new Error('email already exists')
    }
    const user = await User.create({
        username:username,
        email:email,
        password:hashedPassword
    })
    
    res.status(200);
    res.json({id:user.id, username:user.username,email:user.email,token:generateToken(user.id)
    })


})











const updateUser = asyncHandler(async (req, res) => {
  const { username, email, password,id } = req.body;

  if (!username || !email || !password) {
    throw new Error("cannot update");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const exists = await User.findOne({ email: email });

  if (exists && exists.id != id) {
    res.status(401);
    throw new Error("problem");
  }
   const updated = await User.findByIdAndUpdate(id,{email:email,username:username,password:hashedPassword},{new:true});

  res.status(200);
  res.json({
    username: updated.username,
    email: updated.email,
    token: generateToken(updated.id),
    id:updated.id,
  });
});









const loginUser = asyncHandler( async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        throw new Error("enter both email and password")
    }

    const user = await User.findOne({email})

    if(user && ( await bcrypt.compare(password, user.password)) ){
        res.status(200)
        res.json({username:user.username,email: user.email,token:generateToken(user.id), id:user.id})
    }else{
        res.status(403)
        throw new Error('Invalid Password or email')
    }

})









const generateToken = (id)=>{
   return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:'30d'})
}

module.exports = { registerUser, placeOrder, loginUser, updateUser, getOrders };