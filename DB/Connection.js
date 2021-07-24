const mongoose = require('mongoose');

const URI ="mongodb+srv://saiganesh:Siddasai%40388@cluster0.e1i13.mongodb.net/ContactDetails?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;