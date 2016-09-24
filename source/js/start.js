
if(Common.getInstance().currentPageIsGeocacheDetailPage === true){
	setTimeout(runElevationFeature, 0);
	setTimeout(runFriendLogListFeature, 0);
	setTimeout(runAutoDecryptHintFeature, 0);
}

if(Common.getInstance().currentPageContainsAnEditor === true){
	setTimeout(runLogEditorInsertionPopup, 0);
}