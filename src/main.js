import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	},

	fetchWeather(){then(data => {
		console.log(data);
	})
}

});

let city = 'London';  // you can bind this to an input field later
const apiKey = 'YOUR_API_KEY';

async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}


export default app;