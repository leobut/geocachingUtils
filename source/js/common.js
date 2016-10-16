
var Common = (function (){
	var instance;

	function init(){
		var currentPageIsGeocacheDetailPage,
			currentPageContainsAnEditor;

		function findOutIfIAmOnAGeocacheDetailPage(){
			currentPageIsGeocacheDetailPage = ($('.CacheDetailNavigation').length > 0);
		}

		function findEditorOnPage(){
			currentPageContainsAnEditor = ($('.mdd_toolbar').length > 0);
		}

		function createGeocachingUtilsPopup(additionalClasses){
			if(additionalClasses === undefined){
				additionalClasses = '';
			}
			
			var popup = $('<div style="position: absolute; width: 0; height: 0;"><div class="geocachingUtilsPopup ' +
			additionalClasses + '"/></div>');
			popup.getPopupContentContainer = function(){
				return this.find('div.geocachingUtilsPopup');
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
		getInstance: function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}
	};
}());