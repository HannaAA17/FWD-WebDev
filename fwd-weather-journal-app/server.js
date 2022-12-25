// Setup empty JS object to act as endpoint for all routes
const projectData = {
  temperature: 0,
  zip: "",
  feelings: "",
  date: new Date(),
};

const port = 3000;
const apiKey = "";

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.get("/data", (req, res) => {
  res.send(projectData);
});

app.post("/data", (req, res,) => {
    console.log(req.body);
    
    projectData.feelings = req.body.feelings;
    projectData.date = req.body.date;
    
    res.send(projectData);
});

// running the server on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
