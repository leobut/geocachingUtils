var coordinateElement;
var currentPageIsGeocacheDetailPage = true;

function findCoordinatesInPage(){
	var selectorForEditedCoordinates = "a.edit-cache-coordinates > strong > span";
	var selectorForUntouchedCoordinates = "#uxLatLon";

	coordinateElement = $(selectorForUntouchedCoordinates);
	if(coordinateElement.length === 0){
		coordinateElement = $(selectorForEditedCoordinates);
		if(coordinateElement.length === 0){
			coordinateElement = undefined;
			currentPageIsGeocacheDetailPage = false;
		}
	}
}