function runAutoDecryptHintFeature(){
  chrome.storage.sync.get({
		automaticallyDecryptHints: 'true'
	},function(items) {
		if(items.automaticallyDecryptHints === 'true'){
      $("html").append("<script id='automaticallyDecryptHintsScript'>$('#ctl00_ContentBody_lnkDH').click();</script>");
      $("#automaticallyDecryptHintsScript").remove();
    }
	});
}