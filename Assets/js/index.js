var userInput = $("#input-text");
var key = api.key;
console.log(key);


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
     
  });
  makeHistoryButton();
}

function makeHistoryButton() {
  var rootEl = $('#search-buttons');
  var historyButton = $('<button>');
  historyButton.attr('class', 'dynamicButton');
  historyButton.attr('id', userInput.val());
  rootEl.append(historyButton);
  historyButton.text(userInput.val());
  
  localStorage.setItem('city: ' + userInput.val(), userInput.val());
  
}

function weatherSearchButton() {

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + data.city.name + "&units=imperial&appid=" + api.key
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
    

  }));

}





var cityButton = $("#submitButton");
cityButton.on('click', getWeather);
var dynamicButton = $('.dynamicButton');
dynamicButton.on('click', weatherSearchButton);

// init();
