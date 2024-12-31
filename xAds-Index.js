function fetchAds() {
	var xAdsContainer = document.getElementById('xAds-Container');
	if (!xAdsContainer) {
		console.error('xAds-Container not found');
		return;
	}

	fetch('/list.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			var randomAd = json[Math.floor(Math.random() * json.length)];
			fetch('/ads/' + randomAd + '.json')
				.then(function (response) {
					return response.json();
				})
				.then(function (json) {
					var ad = document.createElement('div');
					ad.innerHTML = '<p class="xAds-Title">' + json.title + '</p>' + '<p class="xAds-Description">' + json.description + '</p>' + '<button class="xAds-Button"><a class="xAds-Link" href="' + json.link + '">' + json.prompt + '</a></button>';
					xAdsContainer.appendChild(ad);
				});
		});
}

fetchAds();