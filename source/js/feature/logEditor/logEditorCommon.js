var LogEditorCommon = (function (){
	var instance;

	function init(){
		var toolbar = $('<ul class="logEditorToolbar">');
		$('#logAttachments .file-upload').before(toolbar);

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