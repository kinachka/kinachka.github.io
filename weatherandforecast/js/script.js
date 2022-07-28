const url = 'https://api.openweathermap.org/data/2.5/weather?q='
let cityname = 'Petrozavodsk'
const api_key = '&appid=2d8efa497b04dd86220fd265458c6bcc'
const units = '&units=metric'
const api_lang = '&lang=ru'
let emojivalue = ''

async function getData() {
	let api_url = url + cityname + api_key + units + api_lang
	const response = await fetch (api_url)
	const data = await response.json()
	const varForEmoji = data.weather[0].description
	if (varForEmoji == 'пасмурно') {emojivalue = ' ☁️'}
	if (varForEmoji == 'облачно с прояснениями') {emojivalue = ' 🌤️'}
	if (varForEmoji == 'небольшой дождь') {emojivalue = ' 🌧️'}
	if (varForEmoji == 'дождь') {emojivalue = ' 🌧️'}
	if (varForEmoji == 'переменная облачность') {emojivalue = ' ⛅'}
	if (varForEmoji == 'ясно') {emojivalue = ' ☀️'}
	if (varForEmoji == 'небольшая облачность') {emojivalue = ' 🌤️'}
	if (varForEmoji == 'небольшая морось') {emojivalue = ' 🌧️'}
	if (varForEmoji == 'небольшой проливной дождь') {emojivalue = ' 🌧️'}
	
	document.getElementById('name').textContent = data.name
	document.getElementById('temp').textContent = data.main.temp
	document.getElementById('desc').textContent = data.weather[0].description + emojivalue
}
getData()

document.getElementById("citySubmitButton").onclick = function() {
	cityname = document.getElementById('citynameinput').value
	getData()
}


