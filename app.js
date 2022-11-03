
//API KEY 4fc8be2c751c49ed4a3f74c06ee95788

window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={4fc8be2c751c49ed4a3f74c06ee95788}`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
        });
        //https://api.openweathermap.org/data/2.5/weather?lat=29.760427&lon=-95.369804&appid={4fc8be2c751c49ed4a3f74c06ee95788}
    }
});