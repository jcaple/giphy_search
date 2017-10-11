'use strict';

const CONFIG = {
	GIPHY_API_KEY: '3sLRM5UvMfHIFIqsAur3cUq2nBppYUEd',
	Giphy_SEARCH_URL: 'https://api.giphy.com/v1/gifs/search'
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
					resultVue.items.push({'img':imgURL, 'alt': image.slug});
				});
		  	});
		  }
		}
	}
});

function search(giphy_search) {
	let url = CONFIG.Giphy_SEARCH_URL + "?api_key="
		+ CONFIG.GIPHY_API_KEY + "&q=" 
		+ giphy_search + "&limit=20&rating=r";

	let promise = Promise.resolve();
	return promise.then(function() {
		return $.get(url, function(results) {
			return results;
		});
	});
}