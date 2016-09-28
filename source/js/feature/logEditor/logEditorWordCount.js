function runLogEditorWordCount(){
	var common = LogEditorCommon.getInstance(),
		textArea = $("div.mdd_editor_wrap textarea"),
		popup = Common.getInstance().createGeocachingUtilsPopup("logEditorWordCountPopup"),
		toolbarElement = $("<li id='geoachingUtilsWordCount'><img></li>")

	common.addSeperatorToToolbar();
	
	toolbarElement.append(popup);
	popup.getPopupContentContainer().append("<img>").append("<span>");
	
	toolbarElement.mouseenter(function (){
		popup.show();
	});
	toolbarElement.mouseleave(function (){
		popup.hide();
	});

	common.toolbar.append(toolbarElement);
	defineAndDisplayImage(0);

	textArea.on("input", function(e){
		var currentText = textArea.val(),
			currentWordCount = countWords(currentText);
		defineAndDisplayImage(currentWordCount);
	});

	function defineAndDisplayImage(wordCount){
		var imagePath,
			badgeName;

		if(wordCount < 30){ // lower than 30
			imagePath = "img/logEditor/WritBg_small.png";
			badgeName = "None";
		} else if(wordCount >= 30 && wordCount < 40) { // 30-39
			imagePath = "img/logEditor/WritB_small.png";
			badgeName = "Bronze";
		} else if(wordCount >= 40 && wordCount < 50) { // 40-49
			imagePath = "img/logEditor/WritS_small.png";
			badgeName = "Silver";
		} else if(wordCount >= 50 && wordCount < 60) { // 50-59
			imagePath = "img/logEditor/WritG_small.png";
			badgeName = "Gold";
		} else if(wordCount >= 60 && wordCount < 70) { // 60-69
			imagePath = "img/logEditor/WritP_small.png";
			badgeName = "Platinum";
		} else if(wordCount >= 70 && wordCount < 80) { // 70-79
			imagePath = "img/logEditor/WritR_small.png";
			badgeName = "Ruby";
		} else if(wordCount >= 80 && wordCount < 90) { // 80-89
			imagePath = "img/logEditor/WritSa_small.png";
			badgeName = "Sapphire";
		} else if(wordCount >= 90 && wordCount < 100) { // 90-99
			imagePath = "img/logEditor/WritE_small.png";
			badgeName = "Emerald";
		} else if(wordCount >= 100) { // higher than or equal to 100
			imagePath = "img/logEditor/WritD_small.png";
			badgeName = "Diamond";
		}

		updateWordCountImage(imagePath, wordCount, badgeName);
	}

	function updateWordCountImage(localImagePath, wordCount, badgeName){
		var imagePath = chrome.extension.getURL(localImagePath),
			badgeText;

		if(badgeName === "None"){
			badgeText = "You need at least 30 words to earn a badge";
		} else {
			badgeText = "''" + badgeName + "'' badge";
		}

		$("#geoachingUtilsWordCount img").attr("src", imagePath).attr("title", "Current Word Count: "
			+ wordCount + "\n" + badgeText);

		popup.find("img").attr("src", imagePath);
		popup.find("span").text(wordCount);
	}

	// from http://stackoverflow.com/a/18679657/527718, but slightly improved
	function countWords(s){
		s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
		s = s.replace(/\n/g, " ") // replace newline with space
	    s = s.replace(/(^\s*)|(\s*$)/gi, ""); // exclude  start and end white-space
	    s = s.replace(/[ ]{2,}/gi, " "); // 2 or more space to 1

	    if(s === ""){
	    	return 0;
	    } else {
		    return s.split(" ").length; 
		}
	}
}