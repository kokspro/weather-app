//API KEY 18eef0294552ee05e1f59312a308d784
//https://api.openweathermap.org/data/2.5/weather?q=Houston&units=metric&appid=18eef0294552ee05e1f59312a308d784

let weatherApp = {
    apiKey: "18eef0294552ee05e1f59312a308d784",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));        
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name, icon, description, temp, humidity);
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".temperature").innerText = `${temp}°C`;
        document.querySelector(".description").innerText = `${description}`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;  
        document.querySelector(".weather").classList.remove("starting");  
    },
    search: function () {
        weatherApp.fetchWeather(document.querySelector("input.search").value);
    }
};

document.querySelector(".button").addEventListener("click", weatherApp.search); 

document.querySelector("input.search").addEventListener("keyup", function (event) {
    if ( event.key == "Enter") {
        weatherApp.search();
    }
});