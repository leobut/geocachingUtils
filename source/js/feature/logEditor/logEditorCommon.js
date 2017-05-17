this.LogEditorCommon = (function() {
    var instance;

    function init() {
        var toolbar = $('<ul class="logEditorToolbar">');
        $('#logContent').append(toolbar);

        return {
            toolbar: toolbar
        };
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    };
}());