
if(Common.getInstance().currentPageIsGeocacheDetailPage === true){
	setTimeout(runElevationFeature, 0);
	setTimeout(runFriendLogListFeature, 0);

	chrome.storage.sync.get({
		automaticallyDecryptHints: 'true'
	},function(items) {
		if(items.automaticallyDecryptHints === 'true'){
			setTimeout(runAutoDecryptHintFeature, 0);
		}
	});
}

if(Common.getInstance().currentPageContainsAnEditor === true){
	chrome.storage.sync.get({
		logEditorCountWords: 'true',
    	logEditorShowInsertionPopup: 'true'
	},function(items) {
		if(items.logEditorShowInsertionPopup === 'true'){
			setTimeout(runLogEditorInsertionPopup, 0);
		}
		if(items.logEditorCountWords === 'true'){
			setTimeout(runLogEditorWordCount, 0);
		}
	});
}