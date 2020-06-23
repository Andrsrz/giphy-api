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

const fetchApi = async (url) => {
	try{
		const response = await fetch(url, { mode: 'cors' });
		const gifData = await response.json();
		img.src = gifData.data.images.original.url;
	}catch(err){
		console.log("API ERROR : " + err);
		fetchApi(url+cat);
	}
}

// Default Gif
fetchApi(url+cat);
setButtonEvent();
