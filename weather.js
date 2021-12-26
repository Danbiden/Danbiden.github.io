const API_KEY = "d6a1ccf7e2764f636a161df41d95de46";

function onGeo(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather p:first-child");
        const weather = document.querySelector("#weather p:last-child");
        city.innerText = `City:${data.name}`;
        weather.innerText = `Weather:${data.weather[0].main} Temp: ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);





