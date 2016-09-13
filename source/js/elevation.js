// IMPORTANT: You need to enter your own Google API key here for now:
var apiKey = "";

if(currentPageIsGeocacheDetailPage){
	var currentText = coordinateElement.text();
	var latLon = getDdFromDms(currentText);
	var elevationServiceUrl = "https://maps.googleapis.com/maps/api/elevation/json?locations="+latLon+"&key=" + apiKey;

	jQuery.getJSON(elevationServiceUrl, function(data){
		chrome.storage.sync.get({
    		elevation_measurement: 'meters' // in case nothing was defined yet, use meters
  		},function(items) {
  			if(items.elevation_measurement === 'meters'){
	    		var elevationInMeters = Math.round(data.results[0].elevation * 100) / 100;
				coordinateElement.text(currentText + " (" + elevationInMeters + "m)");
			} else if (items.elevation_measurement === 'feet'){
				var elevationInFeet = Math.round(data.results[0].elevation * 3.2808399 * 100) / 100; // 1m = 3.2808399 ft
				coordinateElement.text(currentText + " (" + elevationInFeet + "ft)");
			} else {
				// unknown unit
				coordinateElement.text(currentText + " (Error while converting elevation. Unknown unit: "+items.elevation_measurement+")");
			}
  		});
	});

	function getDdFromDms(input){
		// input must be the same as on geocaching.com
		// example: N 47° 30.159 E 008° 43.187
		var convert = function(direction, degrees, minutes, seconds){
			degrees = parseFloat(degrees);
			minutes = parseFloat(minutes);
			seconds = parseFloat(seconds); // seconds are already in decimal


			var dd = degrees + minutes/60 + seconds/60;

		    if (direction == "S" || direction == "W") {
		        dd = dd * -1;
		    } // Don't do anything for N or E
		    return dd;
		};

		var parts = input.split(/[.\s°]+/);
	    var lat = convert(parts[0], parts[1], parts[2], "0."+parts[3]);
	    var long = convert(parts[4], parts[5], parts[6], "0."+parts[7]);

	    var result = lat + "," + long;
		return result;
	}
}