const mongoose = require("mongoose");
const Mongo = process.env.MONGODB_URI; 


const connect = () =>{
mongoose
  .connect(process.env.MONGODB_URI)
  .then((conn) => {
    console.log(
      `connected to Mongodb Server By ${conn.connection.host}`.cyan.underline
    );
  })
  .catch((err) => {
    console.log(err);
  });}


module.exports = {connect}