let searchButton = document.getElementById("search-btn");

const apiKey = "f9d722da875289d7fae05f61a551d599";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 async function checkWeather() {
 
    let cityInput = document.getElementById("city-name");
    let userInput = cityInput.value;
    let weatherIcon = document.querySelector(".weatherIcon");

    const response = await fetch(apiUrl + userInput + `&appid=${apiKey}`);
    var data = await response.json();

    document.getElementById("card-name").textContent = (data.name);
    document.getElementById("card-temp").textContent = (data.main.temp)+ " 'c";
    document.getElementById("card-wind").textContent = (data.wind.speed)+" km/h";
    document.getElementById("card-humi").textContent = (data.main.humidity)+ " %";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "asset/img/cloudy.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "asset/img/sun.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "asset/img/rainy-day.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "asset/img/gss.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "asset/img/bss.png"
    }

}

searchButton.addEventListener("click", ()=>{
    checkWeather();
})


