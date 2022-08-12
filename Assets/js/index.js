var userInput = $("#input-text");
var key = api.key;
console.log(key);



function getWeather() {
  var city = userInput.val();
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=f4ac895478946fb295776c00914a0c9e")
  .then((response) => response.json())
  .then((data) => console.log(data));
}

// getWeather();

cityButton = $("#submitButton");
cityButton.on('click', getWeather);