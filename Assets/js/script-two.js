var userInput = $("#input-text");
var key = api.key;
var searchHistory = [];
var buttonEl = $('button');


function getWeather() {
  var city = userInput.val();
  

  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + api.key)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var location = $('#city-name');
    location.text(data.city.name);
    var temp = $('#temperature');
    temp.text(data.list[0].main.temp);
    var wind = $('#wind');
    wind.text(data.list[0].wind.speed);
    var humidity = $('#humidity');
    humidity.text(data.list[0].main.humidity);

    var cityName = data.city.name;
    console.log(cityName);

    var fiveDayQuery = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + api.key;

    fetch(fiveDayQuery, {})
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

    for (i=0; i < 39; i += 8) {
      var weatherSection = $('#forecast');
      var weatherCard = document.createElement('div');
      var cardHeading = document.createElement('h3');
      var cardTemp = document.createElement('p');
      var cardWind = document.createElement('p');
      var cardHumidity = document.createElement('p');

      cardHeading.textContent = data.list[i].main.temp;

      weatherSection.append(weatherCard);
      weatherCard.append(cardHeading);
    }
  });
  });


    searchHistory.push(userInput.val());
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
    console.log(searchHistory);
    makeHistoryButton();
}; 

function makeHistoryButton() {
  var rootEl = $('#search-buttons');
  var history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  for(let i=0; i < history.length; i++) 
  {
  var historyButton = $('<button>');
  historyButton.attr('class', 'dynamicButton');
  historyButton.attr('id', history[i]);
  historyButton.attr('value', history[i]);
  rootEl.append(historyButton);
  historyButton.text(history[i]);
  console.log( history[i]);
  }
};

$('#search-buttons').on('click', '.dynamicButton',function(){
  var city = $(this).attr("id")
  console.log(city);
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + api.key)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var location = $('#city-name');
    location.text(data.city.name);
    var temp = $('#temperature');
    temp.text("Temp"+ data.list[0].main.temp);
    var wind = $('#wind');
    wind.text(data.list[0].wind.speed);
    var humidity = $('#humidity');
    humidity.text(data.list[0].main.humidity);
  })
});



var cityButton = $("#submitButton");
cityButton.on('click', getWeather);
makeHistoryButton();