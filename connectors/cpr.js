/*
'use strict';

const titleRegEx = /(.+?),\s["'](.+?)["']/;

Connector.playerSelector = '.player';

Connector.currentTimeSelector = '.jp-current-time';

Connector.durationSelector = '.jp-duration';

Connector.getArtistTrack = () => {
	let artist = null;
	let track = null;

	let rawText = $('.jp-now-playing').text();
	let result = rawText.match(titleRegEx);
	if (result) {
		artist = result[1];
		track = result[2];
	}

	return { artist, track };
};

Connector.isPlaying = () => {
	return $('.player').hasClass('--desktop');
};
*/

'use strict';

/* global Connector */

Connector.playerSelector = '#player';

//Connector.artistTrackSelector = '#player div.rad-tracks > ul > li';
Connector.artistSelector = '.jp-title-artist'
	
Connector.trackSelector = '.jp-title-program'

Connector.playButtonSelector = '.jp-controls-item jp-controls-item--play';
