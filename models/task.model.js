const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const taskSchema = new mongoose.Schema({

    title: {
        type:String,
        required: true,  
    },
    description:{
        type: String,
    },
    status:{
        type: String,
        enum:['pending','completed'],
        default:'pending',
    },



}, { timeStamps: true });

module.exports = mongoose.model("Tasks", taskSchema);
