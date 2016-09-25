function runLogEditorWordCount(){
	var common = LogEditorCommon.getInstance(),
		previewDiv = $("div.mdd_editor_wrap textarea");

	common.toolbar.append("<li id='geoachingUtilsWordCount'>Hallo<li/>");

	previewDiv.on("input", function(e){
		var currentText = $(e.currentTarget).val(),
			currentWordCount = countWords(currentText);
		$("#geoachingUtilsWordCount").text(currentWordCount);
	});

	// from http://stackoverflow.com/a/18679657/527718, but slightly improved
	function countWords(s){
		s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
		s = s.replace(/\n/g, " ") // replace newline with space
	    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
	    s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1

	    if(s===""){
	    	return 0;
	    } else {
		    return s.split(" ").length; 
		}
	}
}