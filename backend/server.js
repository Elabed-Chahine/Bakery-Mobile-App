
const express = require('express');
const cors = require('cors');

const colors = require('colors');
const {connect} = require('./config/DB');
const { errorHandler } = require('./middlewares/errorMiddleware');
require("dotenv").config();
let port = process.env.PORT || 8000 ;


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



connect();

app.listen(port, ()=>{
    console.log("listening on Port: "+ port); 
})





app.use('/api/bread',require('./routes/breadRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler);