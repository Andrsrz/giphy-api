const img = document.querySelector('img');
const btn = document.getElementById('getgif');
const search = document.getElementById('search');
const url = "https://api.giphy.com/v1/gifs/translate?api_key=EGV8DNdpU1bmKERUsuZPVJlC4wjaUVEB&s=";
const cat = "cat";

const setButtonEvent = () => {
	btn.addEventListener('click', () => {
		let newUrl = url + search.value;
		fetchApi(newUrl);
	}, false);
}

const fetchApi = (url) => {
	fetch(url, {
	mode: 'cors'}).then((res) => {
		return res.json();
	}).then((res) => {
		img.src = res.data.images.original.url;
	});
}

// Default Gif
fetchApi(url+cat);
setButtonEvent();
