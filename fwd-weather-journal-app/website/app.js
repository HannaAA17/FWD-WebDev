/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = "b7d54ea72acfcf2dd9fae0d12a89d7af&units=metric";

// Create a new date instance dynamically with JS
const d = new Date();
const newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

/* Define helper functions */

async function getUpdateData() {
  const request = await fetch("/data");
  try {
    // Transform into JSON
    const projData = await request.json();
    console.log(projData);
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML = Math.round(projData.temp) + "degrees";
    document.getElementById("content").innerHTML = projData.feelings;
    document.getElementById("date").innerHTML = projData.date;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

/* 
async function postData(url = "", data = {}) {
  fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((newData) => {
      console.log("newData", newData);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
*/

async function postData(url = "", data = {}) {
  // send data to server
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // get data from server
  try {
    const newData = await response.json();
    console.log("newData", newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

async function getWeatherData(zip) {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function genData() {
  // get zip code and feelings from document
  const zip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  // get weather data from OpenWeatherMap API
  const weatherData = await getWeatherData(zip);
  // post data to server
  const data = {
    date: newDate,
    temp: weatherData.main.temp,
    feelings: feelings,
  };
  // post data to server then update UI
  postData("/data", data).then(() => {
    getUpdateData(); // update UI
  });
}

/* Update UI */
document.getElementById("generate").addEventListener("click", genData);
