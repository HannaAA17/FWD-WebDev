/* Dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

/* Constants */

// the project data object
const projectData = {};

// the local server port
const port = 3000;

// Start up an instance of app
const app = express();

/* Middleware*/

// body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

/* Setup Server */

// GET route
app.get("/data", (req, res) => {
  res.send(projectData);
});

// POST route
app.post("/data", (req, res) => {
  console.log(req.body);

  // add the data to the projectData object
  for (let [key, value] of Object.entries(req.body)) {
    projectData[key] = value;
  }

  res.send(projectData);
});

/* Start Server */
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
