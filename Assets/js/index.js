
var apiKey = api.key;
var userInput = document.getElementById("test").value;
var submitButton = $('#submitButton');



submitButton.on('click', function() {
    var city = document.getElementById("test").value;
    localStorage.setItem('city', city);
    console.log(city);
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    })
})



    
