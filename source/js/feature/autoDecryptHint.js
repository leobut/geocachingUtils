this.runAutoDecryptHintFeature = function(){
	$('html').append('<script id="automaticallyDecryptHintsScript">$("#ctl00_ContentBody_lnkDH").click();</script>');
	$('#automaticallyDecryptHintsScript').remove();
};