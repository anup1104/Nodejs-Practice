const express = require("express");
const {addTask, getAllTask, getTaskById, deleteTaskById, updateTaskById} = require("../controllers/tasks.controller");

const router = express.Router();

router.post('/add-task', addTask);
router.get('/get-all-tasks', getAllTask);
router.get('/get-task/:taskId', getTaskById);
router.patch('/update-task/:taskId', updateTaskById);
router.delete('/delete-task/taskId', deleteTaskById);

module.exports = router;
