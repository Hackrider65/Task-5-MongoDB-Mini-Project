//Model for task
//Model needs to have Description-String and Completed-String
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	Description: String,
	Completed: String
});
const Task = mongoose.model('task',TaskSchema);
module.exports = Task;