var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const chalk = require("chalk");

mongoose.connect("mongodb+srv://Simon:sg95141123@cluster0.adtqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  error => {
    if (error) {
      console.log(`Erro: ${error}`);
      process.exit(1);
      return 1;
    }
      return 0;
  }
)

const botSchema = new mongoose.Schema({
  _id: String,
  votos: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('botDB', botSchema);