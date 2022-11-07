//API KEY 18eef0294552ee05e1f59312a308d784
//https://api.openweathermap.org/data/2.5/weather?q=Houston&units=metric&appid=18eef0294552ee05e1f59312a308d784

let weatherApp = {
    apiKey: "18eef0294552ee05e1f59312a308d784",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => console.log(data));        
    }
    // displayWeather
}