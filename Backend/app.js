// Import required modules
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Create an instance of express
const app = express();

// Enable CORS for all routes
app.use(cors());

// Use express-fileupload middleware
app.use(fileUpload());

// Define a route to handle file uploads
app.post("/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (e.g. "file") is used to retrieve the uploaded file
  let uploadedFile = req.files.file;

  // Use the mv() method to move the file to a desired location
  uploadedFile.mv("uploads/" + uploadedFile.name, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    // res.send("File uploaded successfully!");
    console.log("File uploaded successfully!");
  });
});

// Start the server
const PORT = process.env.PORT || 5156;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
