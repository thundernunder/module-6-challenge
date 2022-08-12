var city;
var key = api.key;
console.log(key);

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });