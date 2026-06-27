const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Routes
const medicalRoutes = require("./routes/medicalroutes");
app.use("/api/medical", medicalRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/medicalDB")
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });