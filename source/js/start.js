
if(Common.getInstance().currentPageIsGeocacheDetailPage === true){
	// run the extension scripts
	setTimeout(runElevationFeature, 0);
	setTimeout(runFriendLogListFeature, 0);
	setTimeout(runAutoDecryptHintFeature, 0);
}