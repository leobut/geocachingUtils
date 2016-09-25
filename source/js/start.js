
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
	setTimeout(runLogEditorInsertionPopup, 0);
	setTimeout(runLogEditorWordCount, 0);
}