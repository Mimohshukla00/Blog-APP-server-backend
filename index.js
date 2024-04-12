const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;
// middleware
app.use(express.json());

// routes

const blog = require("./routes/blog");

// mount
app.use("/api/v1/blog", blog);

const connectDB = require("./config/database");
connectDB();

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>who are you bitch</h1>");
});
