
var Common = (function () {
	var instance;

	function init(){
		var currentPageIsGeocacheDetailPage;
		var currentPageContainsAnEditor;

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

		findOutIfIAmOnAGeocacheDetailPage();
		findEditorOnPage();

		return {
			currentPageIsGeocacheDetailPage: currentPageIsGeocacheDetailPage,
			currentPageContainsAnEditor: currentPageContainsAnEditor
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