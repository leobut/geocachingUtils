// IMPORTANT: You need to enter your own Google API key here for now:
var apiKey = "";
var coordinateElement = findCoordinatesInPage();


if(coordinateElement !== undefined){
	var currentText = coordinateElement.text();
	var latLon = getDdFromDms(currentText);
	var elevationServiceUrl = "https://maps.googleapis.com/maps/api/elevation/json?locations="+latLon+"&key=" + apiKey;

	jQuery.getJSON(elevationServiceUrl, function(data){
		var elevationInMeters = Math.round(data.results[0].elevation * 100) / 100;
		coordinateElement.text(currentText + " (" + elevationInMeters + "m)")
	});
}

function findCoordinatesInPage(){
	var selectorForEditedCoordinates = "a.edit-cache-coordinates > strong > span";
	var selectorForUntouchedCoordinates = "#uxLatLon";

	var coordinateElement = $(selectorForUntouchedCoordinates);
	if(coordinateElement.length === 0){
		coordinateElement = $(selectorForEditedCoordinates);
		if(coordinateElement.length === 0){
			coordinateElement = undefined;
		}
	}

	return coordinateElement;
}

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
