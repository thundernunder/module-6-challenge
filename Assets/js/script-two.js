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

    for (i=0; i < 6; i++) {
      var fiveDay = $('#forecast');
      var cardDiv = $('<div>');

      var cardDate = $('<h3>');
      cardDate.text(data.list[i].dt_txt);
      
      var cardTemp = $('<p>');
      cardTemp.text("Temp: " + data.list[i].main.temp);
      
      var cardWind = $('<p>');
      cardWind.text("Wind: " + data.list[i].wind.speed + " MPH");

      var cardHumidity = $('<p>');
      cardHumidity.text('Humidity ' + data.list[i].main.humidity);

      fiveDay.append(cardDiv[i]);
      cardDiv.append(cardDate[i]);
      cardDiv.append(cardTemp[i]);
      cardDiv.append(cardWind[i]);
      cardDiv.append(cardHumidity[i]);
    }

    var fiveDay = $('#forecast');
    var cardDiv = $('<div>');

    var cardDate = $('<h3>');
    cardDate.text(data.list[1].dt_txt);
    
    var cardTemp = $('<p>');
    cardTemp.text("Temp: " + data.list[1].main.temp);
    
    var cardWind = $('<p>');
    cardWind.text("Wind: " + data.list[1].wind.speed + " MPH");

    var cardHumidity = $('<p>');
    cardHumidity.text('Humidity ' + data.list[1].main.humidity);

    fiveDay.append(cardDiv);
    cardDiv.append(cardDate);
    cardDiv.append(cardTemp);
    cardDiv.append(cardWind);
    cardDiv.append(cardHumidity);


    searchHistory.push(userInput.val());
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
    console.log(searchHistory);
    makeHistoryButton();
  }); 
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