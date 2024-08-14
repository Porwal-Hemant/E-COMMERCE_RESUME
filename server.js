require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const WebsiteItem = require("./models/websiteItem"); // Import the model

// Initialize Express app
const app = express();

// Get PORT and MONGODB_URL from environment variables
const PORT = process.env.PORT || 3000;
const MONGODB_URL =
  process.env.MONGODB_URL ;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the MongoDB database.");

    // Example: Find all entries in the WebsiteItems collection
    WebsiteItem.find({})
      .then((items) => {
        console.log(
          `Found ${items.length} items in the WebsiteItems collection.`
        );
      })
      .catch((err) => {
        console.error(
          "Error fetching items from the WebsiteItems collection:",
          err
        );
      });
  })
  .catch((err) => {
    console.error("Error connecting to the MongoDB database:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







