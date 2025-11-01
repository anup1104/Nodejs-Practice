const mongoose = require('mongoose');
const { exit } = require('process');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected.");
    }
    catch(e){
        console.log("Database not connected.");
        process.exit(1);
    }
}

module.exports = connectDB;