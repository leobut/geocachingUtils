var LogEditorCommon = (function (){
	var instance;

	function init(){
		var toolbar = $('<ul class="logEditorToolbar">');
		$('textarea.log-text').before(toolbar);

		return {
			toolbar: toolbar
		};
	}

	return {
		getInstance: function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}
	};
}());