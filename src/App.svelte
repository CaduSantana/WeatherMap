
<script>
	import WeatherCard from './WeatherCard.svelte';
	export let name;

	let city = ''; // For the user input
	let weatherData = null; // To store the fetched weather data
	let loading = false; // To show a loading spinner or message while fetching
	let error = null; // To display any error messages

	const apiKey = '486637eb38aad5e7e85b1d3eaca91166';

	async function fetchWeather() {
		loading = true;
		error = null;
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
			if (!response.ok) {
				throw new Error('Failed to fetch weather data');
			}
			weatherData = await response.json();
			window.localStorage.setItem('weatherData', JSON.stringify(weatherData));
			console.log(weatherData);
		} catch (e) {
			error = e.message;
		} finally {
			loading = false;
		}
}

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<input type="text" bind:value={city} placeholder="Enter city name" />
<button on:click={fetchWeather}>Get Weather</button>

{#if loading}
  <p>Loading...</p>
{:else if error}
  <p>{error}</p>
{:else if weatherData}
  <!-- Display the WeatherCard component here with the fetched data -->
  <WeatherCard weather={weatherData} />
{/if}


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>