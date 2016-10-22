function runElevationFeature(){	
	// IMPORTANT: You need to enter your own Google API key here:
	var apiKey = '',
		coordinateElement = findCoordinatesInPage(),
		currentText = coordinateElement.text(),
		latLon = getDdFromDms(currentText),
		elevationServiceUrl = 'https://maps.googleapis.com/maps/api/elevation/json?locations=' + latLon + '&key=' + apiKey;

	jQuery.getJSON(elevationServiceUrl, function(data){
		chrome.storage.sync.get({
			elevationMeasurement: 'meters'
		},function(items){
			var measurementUnit = items.elevationMeasurement,
				textToAppend;
			switch(measurementUnit){
				case 'feet':
					// 1m = 3.2808399 ft
					var	elevationInFeet = Math.round(data.results[0].elevation * 3.2808399 * 100) / 100;
					textToAppend = ' (' + elevationInFeet + 'ft)';
					break;
				case 'meters':
				default:
					var elevationInMeters = Math.round(data.results[0].elevation * 100) / 100;
					textToAppend = ' (' + elevationInMeters + 'm)';
					break;
			}
			coordinateElement.text(currentText + textToAppend);
		});
	});

	function getDdFromDms(input){
		// input must be the same as on geocaching.com
		// example: N 47° 30.159 E 008° 43.187
		var convert = function(direction, degrees, minutes, seconds){
			degrees = parseFloat(degrees);
			minutes = parseFloat(minutes);
			seconds = parseFloat(seconds); // seconds are already in decimal


			var dd = degrees + (minutes / 60) + (seconds / 60);

			if (direction === 'S' || direction === 'W'){
				dd = dd * -1;
			} // Don't do anything for N or E
			return dd;
		};

		var parts = input.split(/[.\s°]+/);
		var lat = convert(parts[0], parts[1], parts[2], '0.' + parts[3]);
		var long = convert(parts[4], parts[5], parts[6], '0.' + parts[7]);

		var result = lat + ',' + long;
		return result;
	}

	function findCoordinatesInPage(){
		var selectorForEditedCoordinates = 'a.edit-cache-coordinates > strong > span',
			selectorForUntouchedCoordinates = '#uxLatLon',
			coordinateElementCandidate = $(selectorForUntouchedCoordinates);

		if(coordinateElementCandidate.length === 0){
			coordinateElementCandidate = $(selectorForEditedCoordinates);
		}

		return coordinateElementCandidate;
	}
}