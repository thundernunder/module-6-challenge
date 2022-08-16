var userInput = $("#input-text");
var key = api.key;
var cities = [];
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

    cities.push(userInput.val());
    localStorage.setItem('cities', cities);
    console.log(cities);
    makeHistoryButton();
    
     
  }); 
  
  
}

function makeHistoryButton() {
  var rootEl = $('#search-buttons');
  var historyButton = $('<button>');
  historyButton.attr('class', 'dynamicButton');
  historyButton.attr('id', userInput.val());
  historyButton.attr('value', userInput.val());
  rootEl.append(historyButton);
  historyButton.text(userInput.val());
  console.log(userInput.val());
};

var historyButton = $('<button>');
historyButton.on('click', function() {
  var singleButton = historyButton[i];
  for (i=0; i <= historyButton.length; i++) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + historyButton[i].val() + "&units=imperial&appid=" + api.key)
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
  })
  }
  
})




var cityButton = $("#submitButton");
cityButton.on('click', getWeather);



  
   



  

  
  



