
if(Common.getInstance().currentPageIsGeocacheDetailPage === true){
	chrome.storage.sync.get({
		automaticallyDecryptHints: 'true',
		showElevation: 'true',
    	showFriendLogs: 'true'
	},function(items) {
		if(items.automaticallyDecryptHints === 'true'){
			setTimeout(runAutoDecryptHintFeature, 0);
		}
		if(items.showElevation === 'true'){
			setTimeout(runElevationFeature, 0);
		}
		if(items.showFriendLogs === 'true'){
			setTimeout(runFriendLogListFeature, 0);
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