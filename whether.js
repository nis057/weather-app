let button = document.querySelector(".button");
let input_value = document.querySelector(".input");
let name_value = document.querySelector(".name");
let temp = document.querySelector(".temp");
let hum = document.querySelector(".hum");
let wind = document.querySelector('.wind');
let city = document.querySelector('.city')


button.addEventListener("click", function humidity() {
    let cityName = input_value.value.trim(); 

    if(cityName) { 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e43ce5780eff7b7b805d6ee6217e7a6c`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(displayData)
        .catch(error => alert(error.message));
    } else {
        alert("Please enter a city name");
    }
})

const displayData = (weather) => {
    temp.innerText = `${(weather.main.temp-273).toFixed(2)}`;
    city.innerText =  `${input_value.value}`
    hum.innerText = `${weather.weather[0].main}`;
    wind.innerText = `${weather.wind.speed}`
}
