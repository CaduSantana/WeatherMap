<script>
	export let weather;

	let tempCelsius = weather.main.temp;
	let humidity = weather.main.humidity;
	let windSpeed = weather.wind.speed;
	let pressure = weather.main.pressure;
	let description = weather.weather[0].description;
	let icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
</script>

<div class="weather-card">
	<h2>{weather.name}</h2>
	<img class="weather-icon" src={icon} alt={description} />
	<p class="temperature">{tempCelsius.toFixed(2)}°C</p>
	<p>{description}</p>
	<p>Humidity: {humidity}%</p>
	<p>Wind Speed: {windSpeed} m/s</p>
	<p>Pressure: {pressure} hPa</p>
</div>

<!-- Then display the data -->
<p>Temperature: {weather.main.temp}°C</p>
<p>Condition: {weather.weather[0].description}</p>
<!-- Add more details as needed -->

<style>
	.weather-card {
		background-color: #e0e0e0;
		padding: 20px;
		border-radius: 8px;
		width: 300px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		text-align: center;
		font-family: Arial, sans-serif;
	}

	.weather-icon {
		width: 50px;
		height: 50px;
	}

	.temperature {
		font-size: 2em;
		margin: 10px 0;
	}
</style>
