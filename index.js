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
