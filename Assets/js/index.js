// console.log(api.key);

// console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&&appid=${api.key}`);
var userSearch = $('#test');
var submitButton = $('#submit');
var apiKey = api.key;
var city = userSearch.val();
var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch(weatherURL)
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log(data);
});

submitButton.on('submit', displayWeather());

function displayWeather() {

var result = $('#result');
result.textContent = city;
localStorage.setItem('city', city);
};