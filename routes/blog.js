const express = require("express");
const router = express.Router();

// import controller
const { dummyLink } = require("../controllers/likeController");

// routes // Mapping creation

router.get("/dummyroute", dummyLink);

// export

module.exports = router;
