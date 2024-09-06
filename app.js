
//student name : Binisha Shakya
// student id :2407792

const foreCast = document.querySelectorAll(".forecast");

foreCast.forEach((foreCast) => {
  const forecastData = document.createElement("div");
  forecastData.classList.add("forecast-data");

  foreCast.append(forecastData);
});

// fetching data with async function
async function fetchData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4354d10655c26c4c0ace6b5030ebaaa3`
   );
   const responsesecond = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4354d10655c26c4c0ace6b5030ebaaa3`
   );
  //linking openweather api link

  try {
    const data = await response.json();
    const datasecond = await responsesecond.json();
    // console.log(data);
    console.log("x", datasecond);
    document.querySelector(
      //Fetching icon from API
      "#icon"
    ).src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // Adding Temperature
    const temp = document.querySelector("#temp");
    temp.textContent = `${data.main.temp} °C`;

    // Adding Information
    const info = document.getElementsByClassName("info");
    info.textContent = data.weather[0].info;

    //new
    const windspeed1 = document.getElementById("windspeedsun");
    windspeed1.textContent = datasecond.list[0].wind.speed;
    const windspeed2 = document.getElementById("windspeedmon");
    windspeed2.textContent = datasecond.list[1].wind.speed;
    const windspeed3 = document.getElementById("windspeedtues");
    windspeed3.textContent = datasecond.list[2].wind.speed;
    const windspeed4 = document.getElementById("windspeedwed");
    windspeed4.textContent = datasecond.list[3].wind.speed;
    const windspeed5 = document.getElementById("windspeedthrus");
    windspeed5.textContent = datasecond.list[4].wind.speed;
    const windspeed6 = document.getElementById("windspeedfri");
    windspeed6.textContent = datasecond.list[5].wind.speed;
    const windspeed7 = document.getElementById("windspeedsat");
    windspeed7.textContent = datasecond.list[6].wind.speed;

    const pressure1 = document.getElementById("presssun");
    pressure1.textContent = datasecond.list[0].main.pressure;
    const pressure2 = document.getElementById("pressmon");
    pressure2.textContent = datasecond.list[1].main.pressure;
    const pressure3 = document.getElementById("presstues");
    pressure3.textContent = datasecond.list[2].main.pressure;
    const pressure4 = document.getElementById("presswed");
    pressure4.textContent = datasecond.list[3].main.pressure;
    const pressure5 = document.getElementById("pressthrus");
    pressure5.textContent = datasecond.list[4].main.pressure;
    const pressure6 = document.getElementById("pressfri");
    pressure6.textContent = datasecond.list[5].main.pressure;
    const pressure7 = document.getElementById("presssat");
    pressure7.textContent = datasecond.list[6].main.pressure;

    const humidity1 = document.getElementById("humisun");
    humidity1.textContent = datasecond.list[0].main.humidity;
    const humidity2 = document.getElementById("humimon");
    humidity2.textContent = datasecond.list[1].main.humidity;
    const humidity3 = document.getElementById("humitues");
    humidity3.textContent = datasecond.list[2].main.humidity;
    const humidity4 = document.getElementById("humiwed");
    humidity4.textContent = datasecond.list[3].main.humidity;
    const humidity5 = document.getElementById("humithrus");
    humidity5.textContent = datasecond.list[4].main.humidity;
    const humidity6 = document.getElementById("humifri");
    humidity6.textContent = datasecond.list[5].main.humidity;
    const humidity7 = document.getElementById("humisat");
    humidity7.textContent = datasecond.list[6].main.humidity;

    //Adding Name
    const name = document.querySelector(".name");
    name.textContent = data.name;

    //Adding Humidity
    const humidity = document.querySelector("#Humidity");
    humidity.textContent = `Humidity:${data.main.humidity} % `;

    //Adding Windspeed
    const windElement = document.querySelector("#WindSpeed");
    windElement.textContent = `Wind Speed:${data.wind.speed}m/s`;

    //Adding Pressure
    const pressure = document.querySelector("#Pressure");
    pressure.textContent = `Pressure:${data.main.pressure}hPa`;

    //Adding Time
    const time = document.querySelector(".time");
    let timestampOffset = data.timezone;
    const timestamp = Math.floor(Date.now() / 1000) + timestampOffset;
    const date = new Date(timestamp * 1000);

    const DateTime = date.toLocaleString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    });
    console.log(DateTime);

    time.textContent = DateTime;
  } catch (error) {
    console.log(error);
    alert("City not Found");
    fetchData("Port Blair");
  }
}
//adding event listener "keyup"
const searchBox = document.querySelector(".search-bar");
const searchInput = document.querySelector("input");
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    fetchData(searchBox.value);
  }
});

// //Setting button response
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
  fetchData(searchBox.value);
});

//Calling Default City
    fetchData("Port Blair");
    