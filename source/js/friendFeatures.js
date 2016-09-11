var resultDisplay = $("div.CacheDetailNavigation");
var friendLogList = $("<ul id='friendLogList'>");
resultDisplay.append(friendLogList);

//TODO: This listener is not being called somehow...
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	console.log(message);
	console.log(sender);
	return false;
});

injectCodeToReadUserToken();


function fillFriendLogList(){
	$.getJSON('/seek/geocache.logbook', {
        tkn: friendLogList.data('userToken'),
        idx: 1,
        num: 100,
        sp: false,
        sf: true,
        decrypt: false
    }).done(function(response) {
    	console.log(response);
        if (response.status != 'success') {
        	// TODO show error to user
            console.log("error");
            return;
        };

    });
}

/*
* Insert a piece of code that sends the userToken to the extension.
*/
function injectCodeToReadUserToken(){
	var myId = chrome.runtime.id;
	var scriptElement = $("<script>chrome.runtime.sendMessage('"+myId+"',{userToken: userToken});</script>");
	$("html").append(scriptElement);
}