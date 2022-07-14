const url = 'https://api.openweathermap.org/data/2.5/weather?q='
let cityname = 'Petrozavodsk'
const api_key = '&appid=2d8efa497b04dd86220fd265458c6bcc'
const units = '&units=metric'
const api_lang = '&lang=ru'
let emojivalue

async function getData() {
	let api_url = url + cityname + api_key + units + api_lang
	const response = await fetch (api_url)
	const data = await response.json()
	console.log(data.name)
	console.log(data.main.temp)
	console.log(data.weather[0].description)
	if (data.weather[0].description == 'пасмурно') {emojivalue = ' ☁️'}
	if (data.weather[0].description == 'облачно с прояснениями') {emojivalue = ' 🌤️'}
	if (data.weather[0].description == 'небольшой дождь') {emojivalue = ' 🌧️'}
	if (data.weather[0].description == 'дождь') {emojivalue = ' 🌧️'}
	if (data.weather[0].description == 'переменная облачность') {emojivalue = ' ⛅'}
	if (data.weather[0].description == 'ясно') {emojivalue = ' ☀️'}
	if (data.weather[0].description == 'небольшая облачность') {emojivalue = ' 🌤️'}
	if (data.weather[0].description == 'небольшая морось') {emojivalue = ' 🌧️'}
	document.getElementById('name').textContent = data.name
	document.getElementById('temp').textContent = data.main.temp
	document.getElementById('desc').textContent = data.weather[0].description + emojivalue
}
getData()

document.getElementById("citySubmitButton").onclick = function() {
	cityname = document.getElementById('citynameinput').value
	getData()
}


