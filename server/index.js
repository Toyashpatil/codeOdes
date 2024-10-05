const express = require("express");
const dotenv = require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const logger = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");

dbConnection();

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.use(errorHandler);
app.use("/api", require("./routes/csvRoutes"));
app.use("/user", require("./routes/userRoutes"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
