const fs = require("fs");
const csv = require("csv-parser");

const getCsvData = (req, res) => {
  const results = [];

  fs.createReadStream("./data/colleges.csv")
    .pipe(csv())
    .on("data", (row) => {
      results.push(row);
    })
    .on("end", () => {
      res.json(results);
    })
    .on("error", (err) => {
      console.error("Error reading the CSV file:", err);
      res.status(500).json({ error: "Failed to read CSV file" });
    });
};

module.exports = getCsvData;
