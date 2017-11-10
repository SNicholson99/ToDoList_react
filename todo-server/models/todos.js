var mongoose = require("mongoose");

const ToDosSchema = {
  id: String,
  todo : String,
  complete : Boolean,
  deadline : Date
}

const ToDos = mongoose.model('Todo', mongoose.Schema(ToDosSchema));

module.exports = ToDos;
