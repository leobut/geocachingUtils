
var Common = (function () {
	var instance;

	function init(){
		var currentPageIsGeocacheDetailPage;

		function findOutIfIAmOnAGeocacheDetailPage(){
			if($(".CacheDetailNavigation").length === 0){
				currentPageIsGeocacheDetailPage = false;
			} else {
				currentPageIsGeocacheDetailPage = true;
			}
		}

		findOutIfIAmOnAGeocacheDetailPage();

		return {
			currentPageIsGeocacheDetailPage: currentPageIsGeocacheDetailPage
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