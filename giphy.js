const img = document.querySelector('img');

fetch("https://api.giphy.com/v1/gifs/translate?api_key=EGV8DNdpU1bmKERUsuZPVJlC4wjaUVEB&s=cats", {
	mode: 'cors'}).then((res) => {
		return res.json();
	}).then((res) => {
		img.src = res.data.images.original.url;
	});
