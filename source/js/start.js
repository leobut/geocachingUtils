
if(Common.getInstance().currentPageIsGeocacheDetailPage === true){
	// run the extension scripts
	setTimeout(runElevationFeature, 0);
	setTimeout(runFriendFeature, 0);
}