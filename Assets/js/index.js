var searchHistory = [];
var apiKey = api.key;
var rootWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=limit=5&units=imperial&appid=${apiKey}`;
var userInput = document.getElementById('search-bar');
var submitBtn = document.getElementById('submitButton');



function getWeatherToday() {
  var city = userInput.value;
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + api.key)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var location = $('#city-name');
    location.text(data.city.name);
    var temp = $('#temperature');
    temp.text(data.list[0].main.temp);
    var wind = $('#wind');
    wind.text(data.list[0].wind.speed);
    var humidity = $('#humidity');
    humidity.text(data.list[0].main.humidity);

    searchHistory.push(userInput.val());
    localStorage.setItem('Search History', searchHistory);
    console.log(searchHistory);
  });
};

submitBtn.addEventListener('click', getWeatherToday);

