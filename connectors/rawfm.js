'use strict';

/* global Connector, Util */

Connector.playerSelector = '.holder';

Connector.getArtistTrack = function () {
	let artist = $('#song_info h2').text();
	let track = $('#song_info h3').text();

	if (artist === 'rawPlayer' || artist === 'loading...') {
		return Util.emptyArtistTrack;
	}
	if (track === 'Standard Definition Audio' || track === 'High Definition Audio') {
		return Util.emptyArtistTrack;
	}
	return { artist, track };
};

Connector.isPlaying = function () {
	return $('#play1 img').attr('src').indexOf('stop') !== -1;
};
