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


export default app;