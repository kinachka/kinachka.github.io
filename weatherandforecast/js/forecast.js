const url = 'https://api.openweathermap.org/data/2.5/forecast?q='
let cityname = 'Petrozavodsk'
const api_key = '&appid=2d8efa497b04dd86220fd265458c6bcc'
const units = '&units=metric'
const api_lang = '&lang=ru'

async function getData() {
	let api_url = url + cityname + api_key + units + api_lang
	const response = await fetch (api_url)
	const data = await response.json()
	console.log(data.city.name)
	console.log(data.list[0].main.temp)
	console.log(data)
	document.getElementById('name').textContent = data.city.name

	for (let i = 1; i < 6; i++) {
		document.getElementById(`temp${i}`).textContent = data.list[i].main.temp
		document.getElementById(`desc${i}`).textContent = data.list[i].weather[0].description
		document.getElementById(`date${i}`).textContent = data.list[i].dt_txt
	}
}
getData()

document.getElementById("citySubmitButton").onclick = function() {
	cityname = document.getElementById('citynameinput').value
	getData()
}