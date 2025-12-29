import errorHandler from "./utils/errorHandler";
import specialistRoutes from "./routes/specialistRoutes";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// MIDDLEWARE //
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES //
app.use("/api/specialists", specialistRoutes);

// ERROR HANDLING MIDDLEWARE //
app.use(errorHandler);

module.exports = app;
