
var Common = (function () {
	var instance;

	function init(){
		var coordinateElement,
			currentPageIsGeocacheDetailPage = true;

		function findCoordinatesInPage(){
			var selectorForEditedCoordinates = "a.edit-cache-coordinates > strong > span",
				selectorForUntouchedCoordinates = "#uxLatLon";

			coordinateElement = $(selectorForUntouchedCoordinates);
			if(coordinateElement.length === 0){
				coordinateElement = $(selectorForEditedCoordinates);
				if(coordinateElement.length === 0){
					coordinateElement = undefined;
					currentPageIsGeocacheDetailPage = false;
				}
			}
		}

		findCoordinatesInPage();

		return {
			currentPageIsGeocacheDetailPage: currentPageIsGeocacheDetailPage,
			coordinateElement: coordinateElement
		};
	}

	return {
		getInstance: function() {
			if(!instance){
				instance = init();
			}
			return instance;
		}
	};
}());