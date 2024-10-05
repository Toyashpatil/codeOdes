const express = require("express");
const router = express.Router();
const getCsvData = require("../controllers/colleges/csvController");

// Define route to get CSV data
router.route("/colleges").get(getCsvData);

module.exports = router;
