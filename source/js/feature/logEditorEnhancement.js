function runlogEditorEnhancement(){
	var editor = $(".mdd_toolbar"),
		toolbar = editor.find("ul"),
		guToolbarElement,
		popupElement, 
		supportedSmileys,
		supportedTags;

	loadSupportedSmileys();
	loadSupportedTags();
	addSeperatorToToolbar();
	addGUIconToToolbar();


	function addSeperatorToToolbar(){
		toolbar.append("<li><span class='mdd_sep'></span></li>");
	}

	function addGUIconToToolbar(){
		toolbar.append("<li id='geoachingUtilsFunctions'><img src='" + chrome.extension.getURL("img/appIcon26.png") + "'><li/>");
		guToolbarElement = $("#geoachingUtilsFunctions");

		hookInGUWindow();

		guToolbarElement.mouseenter(function (){
    		popupElement.show();
    	});
    	guToolbarElement.mouseleave(function (){
    		popupElement.hide();
    	});
	}

	function hookInGUWindow(){
		guToolbarElement.append("<div style='position: relative; width: 0; height: 0'><div id='geoachingUtilsFunctionsPopup' class='geocachingUtilsPopup'><span class='popupText'>Smileys:</span><ul class='smileyList'></ul><span class='popupText'>Tags:</span><ul class='tagList'></ul></div></div>")
		popupElement = $("#geoachingUtilsFunctionsPopup");
		popupElement.hide();

		addSmileysToPopup(popupElement);
		addTagsToPopup(popupElement);
	}

	function addSmileysToPopup(popupElement){
		$.each(supportedSmileys, function(index, value){
			var smileyImage = $("<img src='" + value.image + "'>"),
				newListElement = $("<li data-snippet='" + value.snippet + "' title='" + value.name + "'>");

			newListElement.append(smileyImage);
			popupElement.find("ul.smileyList").append(newListElement);

			newListElement.on("click", functionsPopupClickHandler);
		});
	}

	function addTagsToPopup(popupElement){
		$.each(supportedTags, function(index, value){
			var newListElement = $("<li data-snippet='" + value.snippet + "' title='" + value.description + "'><i>" + value.name + "</i></li>");

			popupElement.find("ul.tagList").append(newListElement);
			newListElement.on("click", functionsPopupClickHandler);
		});
	}

	function functionsPopupClickHandler(event){
		var snippetToInsert = $(event.currentTarget).attr("data-snippet"),
			textArea = $(".mdd_editor_wrap > textarea")[0];

		insertAtCursor(textArea, snippetToInsert);
		dispatchKeyupEventOnTextArea($(textArea));
	}

	// A bit modified function from http://stackoverflow.com/questions/11076975/insert-text-into-textarea-at-cursor-position-javascript
	function insertAtCursor(myField, myValue) {
	    if (myField.selectionStart || myField.selectionStart == '0') {
	        var startPos = myField.selectionStart;
	        var endPos = myField.selectionEnd;
	        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
	        myField.selectionStart = startPos + myValue.length;
	        myField.selectionEnd = startPos + myValue.length;
	    } else {
	        myField.value += myValue;
	    }
	}

	// Inject a script into the text area that clicks the ullist button of the editor twice.
	// This is a workaround for the fact that you can't easily trigger the markdown editor to refresh.
	function dispatchKeyupEventOnTextArea(textArea){
		var eventDispatcherScript = $("<script id='eventDispatcherScript'>$('#mdd_ullist').click().click();$('#eventDispatcherScript').remove();</script>");
		textArea.append(eventDispatcherScript);
	}

	function loadSupportedTags(){
		supportedTags = [
			{
				name: "FTF",
				description: "First to find",
				snippet: "{FTF}",
			},
			{
				name: "STF",
				description: "Second to find",
				snippet: "{STF}"
			},
			{
				name: "TTF",
				description: "Third to find",
				snippet: "{TTF}"
			},
		];
	}

	function loadSupportedSmileys() {
		supportedSmileys = [
			{
				name: "smile",
				image: "../images/icons/icon_smile.gif",
				snippet: "[:)]"
			},
			{
				name: "big smile",
				image: "../images/icons/icon_smile_big.gif",
				snippet: "[:D]"
			},
			{
				name: "cool",
				image: "../images/icons/icon_smile_cool.gif",
				snippet: "[8D]"
			},
			{
				name: "blush",
				image: "../images/icons/icon_smile_blush.gif",
				snippet: "[:I]"
			},
			{
				name: "tongue",
				image: "../images/icons/icon_smile_tongue.gif",
				snippet: "[:P]"
			},
			{
				name: "evil",
				image: "../images/icons/icon_smile_evil.gif",
				snippet: "[}:)]"
			},
			{
				name: "shocked",
				image: "../images/icons/icon_smile_shock.gif",
				snippet: "[:O]"
			},
			{
				name: "wink",
				image: "../images/icons/icon_smile_wink.gif",
				snippet: "[;)]"
			},
			{
				name: "clown",
				image: "../images/icons/icon_smile_clown.gif",
				snippet: "[:o)]"
			},
			{
				name: "back eye",
				image: "../images/icons/icon_smile_blackeye.gif",
				snippet: "[B)]"
			},
			{
				name: "eightball",
				image: "../images/icons/icon_smile_8ball.gif",
				snippet: "[8]"
			},
			{
				name: "frown",
				image: "../images/icons/icon_smile_sad.gif",
				snippet: "[:(]"
			},
			{
				name: "shy",
				image: "../images/icons/icon_smile_shy.gif",
				snippet: "[8)]"
			},
			{
				name: "angry",
				image: "../images/icons/icon_smile_angry.gif",
				snippet: "[:(!]"
			},
			{
				name: "dead",
				image: "../images/icons/icon_smile_dead.gif",
				snippet: "[xx(]"
			},
			{
				name: "sleepy",
				image: "../images/icons/icon_smile_sleepy.gif",
				snippet: "[|)]"
			},
			{
				name: "kisses",
				image: "../images/icons/icon_smile_kisses.gif",
				snippet: "[:X]"
			},
			{
				name: "approve",
				image: "../images/icons/icon_smile_approve.gif",
				snippet: "[^]"
			},
			{
				name: "disapprove",
				image: "../images/icons/icon_smile_dissapprove.gif",
				snippet: "[V]"
			},
			{
				name: "question",
				image: "../images/icons/icon_smile_question.gif",
				snippet: "[?]"
			}
		];
	}
}