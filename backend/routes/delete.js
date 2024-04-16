const express = require("express");
const router = express.Router();
const deleteController = require("../controllers/delete");

router.post("/", deleteController);

module.exports = router;
