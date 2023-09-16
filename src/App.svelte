<script>
	import WeatherCard from "./WeatherCard.svelte";

	let city = ""; // For the user input
	let weatherData = null; // To store the fetched weather data
	let loading = false; // To show a loading spinner or message while fetching
	let error = null; // To display any error messages


	async function fetchWeather() {
		loading = true;
		error = null;
		try {
			// Fetching data from your own server now, not directly from OpenWeatherMap
			const response = await fetch(`http://localhost:3001/weather?city=${city}`);
			if (!response.ok) {
				throw new Error('Failed to fetch weather data');
			}
			weatherData = await response.json();
		} catch (e) {
			error = e.message;
		} finally {
			loading = false;
		}
}


	// Theme toggling
	let darkTheme = false;

    function toggleTheme() {
        darkTheme = !darkTheme;
        document.body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    }
</script>

<button on:click={toggleTheme}>
    Toggle Theme
</button>

<div class="app-container">
	<div class="search-container">
		<i class="fas fa-sun"></i>
		<input type="text" bind:value={city} placeholder="Enter city name" />
		<button on:click={fetchWeather}>Get Weather</button>
	</div>

	{#if loading}
		<p>Loading...</p>
	{:else if error}
		<p class="error-message">{error}</p>
	{:else if weatherData}
		<WeatherCard weather={weatherData} />
	{/if}
</div>

<style>
	.app-container {
		background-color: #ffffff;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		width: 90%;
		max-width: 600px;
	}

	.search-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.error-message {
		color: red;
		text-align: center;
		margin-top: 20px;
	}
</style>
