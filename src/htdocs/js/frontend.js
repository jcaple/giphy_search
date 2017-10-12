'use strict';

const CONFIG = {
	GIPHY_API_KEY: '',  // PROVIDE YOUR OWN GIPHY API KEY HERE!!!!!!
	Giphy_SEARCH_URL: 'https://api.giphy.com/v1/gifs/search',
	COOKIE_NAME: 'jcaple007-giphy_search'
};

let resultVue = new Vue({
	el: '#searchResults',
	data: {
		results: '',
		items: []
	}
});

let searchVue = new Vue({
	el: '#searchForm',
	data: {
		searchPhrase: ''
	},
	methods: {
		onSubmit: function() {},
		btnSearchClick: function () {
			console.log('Button CLicked');
			if (this.searchPhrase !== '' || this.searchPhrase !== undefined) {
				console.log('Searching For: ' + this.searchPhrase);
			  	resultVue.results = 'Searching...';
			  	search(this.searchPhrase).then(function(results) {
			  		resultVue.results = '';
			  		resultVue.items = [];

					results.data.forEach(function(image) {
						let imgURL = image.images.downsized.url;						
						let shareURL = "https://www.facebook.com/plugins/share_button.php?href=" + image.embed_url + "&layout=button&size=small&mobile_iframe=true&appId=360349651081519&width=59&height=20";
						resultVue.items.push({
							'img':imgURL, 
							'alt': image.slug, 
							'embed': image.embed_url, 
							'share': shareURL
						});
					});
			  	});
			}
		}
	}
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function search(giphy_search) {
	let url = CONFIG.Giphy_SEARCH_URL + "?api_key="
		+ CONFIG.GIPHY_API_KEY + "&q=" 
		+ giphy_search + "&limit=30&rating=r&offset=" + getRandomInt(0,200);

	let promise = Promise.resolve();
	return promise.then(function() {
		return $.get(url, function(results) {
			return results;
		});
	});
}

function logout() {
    document.cookie = CONFIG.COOKIE_NAME + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location = '/login.html';
};