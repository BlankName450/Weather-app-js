const apiKey ="46df8a64cf3c41c315323db1b5d8e318";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + `&appid=${apiKey}`+`&q=${city}`);
        if (!response.ok) throw new Error("Weather data not found");
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML= data.name       
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C"       
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%"       
        document.querySelector(".wind-speed").innerHTML= data.wind.speed  + "Km/h"
        document.querySelector(".weather-condition").innerHTML= data.weather[0].main
            
        const condition = data.weather[0].main;
        const weatherImg = document.querySelector(".weather-icon");
        const icons = {
            Clear: "clear.png",
            Clouds: "clouds.png",
            Rain: "rain.png",
            Snow: "snow.png",
            Mist: "mist.png",
            Smoke: "mist.png"
        };
            
        weatherImg.src = icons[condition] || "default.png"; }

    catch (error) {
        console.error("Error fetching weather:", error);
        alert("Could not fetch weather data. Please try again. or try enter city name correctly.");
    }

        
}
document.querySelector(".search button").addEventListener("click",()=>{
    const city = document.querySelector(".search input").value;
    if (city.trim()!==""){
        checkWeather(city);
    }
});

