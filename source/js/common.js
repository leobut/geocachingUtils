
var Common = (function () {
	var instance;

	function init() {
		var currentPageIsGeocacheDetailPage,
			currentPageContainsAnEditor;

		function findOutIfIAmOnAGeocacheDetailPage(){
			if($(".CacheDetailNavigation").length === 0){
				currentPageIsGeocacheDetailPage = false;
			} else {
				currentPageIsGeocacheDetailPage = true;
			}
		}

		function findEditorOnPage(){
			if($(".mdd_toolbar").length === 0){
				currentPageContainsAnEditor = false;
			} else {
				currentPageContainsAnEditor = true;
			}
		}

		function createGeocachingUtilsPopup(additionalClasses = ""){
			var popup = $("<div style='position: relative; width: 0; height: 0'><div class='geocachingUtilsPopup " +
			additionalClasses + "'/></div>");
			popup.getPopupContentContainer = function(){
				return this.find("div.geocachingUtilsPopup");
			};
			popup.hide();
			return popup;
		}

		findOutIfIAmOnAGeocacheDetailPage();
		findEditorOnPage();

		return {
			currentPageIsGeocacheDetailPage: currentPageIsGeocacheDetailPage,
			currentPageContainsAnEditor: currentPageContainsAnEditor,
			createGeocachingUtilsPopup: createGeocachingUtilsPopup
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