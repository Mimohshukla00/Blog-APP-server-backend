const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB connected succesfully"))
    .catch((error) => {
      console.log(error);
      console.log("DB connection failed");
      process.exit(1);
    });
};

module.exports=connectDB;