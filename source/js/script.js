// IMPORTANT: You need to enter your own Google API key here for now:
var apiKey = "";
var coordinateElement = findCoordinatesInPage();


if(coordinateElement !== undefined){
	var currentText = coordinateElement.text();
	var elevationServiceUrl = "https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=" + apiKey;

	jQuery.getJSON(elevationServiceUrl, function(data){
		var elevationInMeters = Math.round(data.results[0].elevation * 100) / 100;
		coordinateElement.text(currentText + " (" + elevationInMeters + "m)")
	});
}

function findCoordinatesInPage(){
	var selectorForEditedCoordinates = "a.edit-cache-coordinates > strong > span";
	var selectorForUntouchedCoordinates = "#uxLatLon";

	var coordinateElement = $(selectorForUntouchedCoordinates);
	if(coordinateElement===undefined){
		coordinateElement = $(selectorForEditedCoordinates);
	}

	return coordinateElement;
}


