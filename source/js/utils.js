const Utils = (function () {
    let instance;

    function init() {
        let currentPageIsGeocacheDetailPage = $('.CacheDetailNavigation').length > 0;
        let currentPageContainsAnEditor = ($('div.editor-wrapper').length > 0);

        function createGeocachingUtilsPopup(additionalClasses) {
            // remove this if statement and add the default value to the parameter as soon as uglify can handle es6
            if (additionalClasses === undefined) {
                additionalClasses = '';
            }

            let popup = $('<div style="position: absolute; width: 0; height: 0;">' +
                '<div class="geocachingUtilsPopup ' + additionalClasses + '"/>' +
                '</div>');
            popup.getPopupContentContainer = function () {
                return this.find('div.geocachingUtilsPopup');
            };
            popup.hide();
            return popup;
        }

        return {
            currentPageIsGeocacheDetailPage: currentPageIsGeocacheDetailPage,
            currentPageContainsAnEditor: currentPageContainsAnEditor,
            createGeocachingUtilsPopup: createGeocachingUtilsPopup
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
}());