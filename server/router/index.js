const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/clientData", dataController.getAllData);

module.exports = router;
