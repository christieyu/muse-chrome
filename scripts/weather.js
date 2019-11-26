// modified from https://stackoverflow.com/questions/36174177/show-local-weather-using-openweathermap-api
var getLatlong = function(data) {
	console.log("getLatlong start")
	console.log(data.ip)
	$.getJSON('https://cors.io/?http://api.ipstack.com/' + data.ip, { // to resolve chrome extension security issue: https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
		access_key: 'd549fdd389fd64ca7802dbabe59e6779',
	}, getWeather, 'jsonp');
	console.log("getLatlong done")
};

var getWeather = function(data) {
	console.log("getweatherstart")
	console.log(data.latitude)
	console.log(data.longitude)
	$.getJSON('https://cors.io/?http://api.openweathermap.org/data/2.5/weather?', {
		lat: data.latitude,
		lon: data.longitude,
		appid: '5bea301c66751d0ecb8281e66e4bf90b'
	}, showWeather, 'jsonp');
	console.log("getweatherdone")
};

var showWeather = function(data) {
	temp = Math.round(((data.main.temp) - 273.15) * 1.8 + 32),
	$("#temp").text(temp + ' \u00B0' + 'F'), // convert from kelvin, degree symbol from https://www.codingforums.com/javascript-programming/76729-how-insert-degree-symbol.html
	max = Math.round(((data.main.temp_max) - 273.15) * 1.8 + 32),
	min = Math.round(((data.main.temp_min) - 273.15) * 1.8 + 32),
	$("#maxmin").text('(High: ' + max + ' \u00B0' + 'F' + ', Low: ' + min + ' \u00B0' + 'F)'),
	$("#description").text(data.weather[0].description),
	$("#place").text(data.name),
	console.log("showweatherdone")
};

$(document).ready(function() {
	console.log("doc is ready")
	$.getJSON('https://api.ipify.org?format=json', getLatlong)
})