if(currentPageIsGeocacheDetailPage){

	var resultDisplay = $("div.CacheDetailNavigation");
	var friendLogList = $("<ul id='friendLogList'>");
	friendLogList.append("<img id='friendLogListSpinner' src='"+chrome.extension.getURL("img/spinner.gif")+"'>");
	resultDisplay.append(friendLogList);

	injectCodeToReadUserToken();
	loadFriendLogs(1);


	function loadFriendLogs(page){
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
	    		imDoneLoading();
	        	friendLogList.text("Error while loading friend logs");
	        } else {
	        	if(response.pageInfo.idx < response.pageInfo.totalPages){
	        		// load more friends if there are pages left
	        		loadFriendLogs(++page);
	        	} else {
	        		imDoneLoading();
	        		addDomElementsBasedOnResponse(response.data);
			    }
		    }
	    });
	}

	function addDomElementsBasedOnResponse(data){
		if(data.length === 0){
			friendLogList.text("No friend logs");
		} else {
	        $.each(data, function (index, value){
	        	var logDetailDisplay = $("<div style='position: relative; width: 0; height: 0'><div class='logDetailPopup span-17'>"+value.LogText+"</div><div class='arrow'/></div>");
	        	logDetailDisplay.hide();

				var avatar = value.AvatarImage === ""?"/images/default_avatar.png":"https://img.geocaching.com/user/avatar/"+value.AvatarImage;
	        	var userImage = $("<img class='friendAvatar' src='"+avatar+"'>");
	        	var logDetailTable = $("<table><tr><td><img src='/images/logtypes/"+value.LogTypeImage+"'> "+value.Visited+"</td></tr><tr><td>"+value.UserName+"</td></tr></table>");

	        	var newFriendLogEntry = $("<li>").append(logDetailDisplay).append(userImage).append(logDetailTable);
	        	newFriendLogEntry.mouseenter(function (){
	        		logDetailDisplay.show();
	        	});
	        	newFriendLogEntry.mouseleave(function (){
	        		logDetailDisplay.hide();
	        	});

	        	friendLogList.append(newFriendLogEntry);
	        });
	    }
	}

	function imDoneLoading(){
		$("#friendLogListSpinner").remove();
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