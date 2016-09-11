if(currentPageIsGeocacheDetailPage){

	var resultDisplay = $("div.CacheDetailNavigation");
	var friendLogList = $("<ul id='friendLogList'>");
	resultDisplay.append(friendLogList);

	injectCodeToReadUserToken();
	fillFriendLogList(1);


	function fillFriendLogList(page){
		var userToken = friendLogList.attr('data-userToken');
		$.getJSON('/seek/geocache.logbook', {
	        tkn: userToken,
	        idx: page,
	        num: 100,
	        sp: false,
	        sf: true,
	        decrypt: false
	    }).done(function(response) {
	    	if (response.status != 'success') {
	        	friendLogList.text("There has been an error while loading friend logs.");
	            return;
	        } else {
	        	if(response.pageInfo.idx < response.pageInfo.totalPages){
	        		// load more friends if there are pages left
	        		fillFriendLogList(++page);
	        	} else {
			        $.each(response.data, function (index, value){
			        	var newFriendLogEntry = $("<li>");
			        	var userImage = $("<img class='friendAvatar' src='https://img.geocaching.com/avatar/"+value.AvatarImage+"'>");
			        	var logDetailTable = $("<table><tr><td><img src='/images/logtypes/"+value.LogTypeImage+"'> "+value.Visited+"</td></tr><tr><td>"+value.UserName+"</td></tr></table>");

			        	newFriendLogEntry.append(userImage).append(logDetailTable);
			        	friendLogList.append(newFriendLogEntry);
			        });
			    }
		    }
	    });
	}

	/*
	* Insert a piece of code into the page that adds the userToken to the DOM of the friend list.
	* If it is not in the DOM, but e.g. in data(), the exchange of data das not work --> it must be in the DOM.
	* userToken is needed to load the friend logs and is not accessible otherwise within this script.
	*/
	function injectCodeToReadUserToken(){
		var scriptElement = $("<script>$('#friendLogList').attr('data-userToken', userToken);</script>");
		$("html").append(scriptElement);
	}
}