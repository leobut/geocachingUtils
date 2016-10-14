var LogEditorCommon = (function () {
	var instance;

	function init(){
		var editor = $('.mdd_toolbar'),
			toolbar = editor.find('ul');

		function addSeperatorToToolbar(){
			toolbar.append('<li><span class="mdd_sep"></span></li>');
		}

		return {
			toolbar: toolbar,
			addSeperatorToToolbar: addSeperatorToToolbar
		};
	}

	return {
		getInstance: function() {
			if(!instance){
				instance = init();
			}
			return instance;
		}
	};
}());