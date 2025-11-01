const taskModel = require('../models/task.model');

exports.addTask = async(req, res)=>{
    const {title, description, status} = req.body;
    try{
        const newTask = new taskModel({
            title:title,
            description:description,
            status:status,
        });
        const task = await newTask.save();
        return res.status(201).json({
            success: true,
            message: "Task added.",
            task,
        });
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message: "Internal server error.",
        });
    }
}
exports.getAllTask = async(req, res)=>{
    try{
        const tasks = await taskModel.find();
        return res.status(200).json({
            success: true,
            message: "Got all the tasks.",
            tasks,
        });
    }
    catch(e){
       
         return res.status(500).json({
            success:false,
            message: "Internal server error.",
        });
    }
}
exports.getTaskById = async(req, res)=>{
    const {taskId} = req.params;
    console.log(taskId);
    try{
        const task = await taskModel.findById(taskId);
        return res.status(200).json({
            success:true,
            message:"Got the task with ID.",
            task,
        });
    }
    catch(e){
         return res.status(500).json({
            success:false,
            message: "Internal server error.",
        });
    }
}

exports.deleteTaskById = async(req, res)=>{
    const {taskId} = req.params;
    try{
        const task = await taskModel.findByIdAndDelete(taskId);
        return res.status(200).json({
            success: true,
            message: `Deleted the task with Id ${task._id}`,
            task
        });
    }
    catch(e){
         return res.status(500).json({
            success:false,
            message: "Internal server error.",
        });
    }
}

exports.updateTaskById = async(req, res)=>{
    const {taskId} = req.params;
    const {description} = req.body;
    try{
        const task = await taskModel.findById(taskId);
        if(!task){
            return res.status(404).json({
                success: true,
                message: "Task not found with this ID",
            });
        }
        task.description = description;
        await task.save();

        return res.status(200).json({
            success: true,
            message: "Updated the task.",
            task,
        });
    }
    catch{
         return res.status(500).json({
            success:false,
            message: "Internal server error.",
        });
    }
}