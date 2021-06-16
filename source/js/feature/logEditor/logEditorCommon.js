LogEditorCommon = (function () {
  let instance;

  function init() {
    const toolbar = $('<ul class="logEditorToolbar">');
    $('#logContent').append(toolbar);

    return {
      toolbar: toolbar
    };
  }

  return {
    getInstance: function () {
      if(!instance) {
        instance = init();
      }
      return instance;
    }
  };
}());