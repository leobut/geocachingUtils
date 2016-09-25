
function save_options() {
  var elevationMeasurement = document.getElementById('elevation_measurement').value,
      automaticallyDecryptHints = document.getElementById('automatically_decrypt_hints').value,
      logEditorCountWords = document.getElementById('log_editor_count_words').value,
      logEditorShowInsertionPopup = document.getElementById('log_editor_show_insertion_popup').value;


  chrome.storage.sync.set({
    elevation_measurement: elevationMeasurement,
    automaticallyDecryptHints: automaticallyDecryptHints,
    logEditorCountWords: logEditorCountWords,
    logEditorShowInsertionPopup: logEditorShowInsertionPopup
  }, function() {
    var status = document.getElementById('statusDisplay');
    status.textContent = 'Settings saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 3000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    // concrete values in here define the default if nothing was set yet by the user
    elevation_measurement: 'meters',
    automaticallyDecryptHints: 'true',
    logEditorCountWords: 'true',
    logEditorShowInsertionPopup: 'true'
  }, function(items) {
    document.getElementById('elevation_measurement').value = items.elevation_measurement;
    document.getElementById('automatically_decrypt_hints').value = items.automaticallyDecryptHints;
    document.getElementById('log_editor_count_words').value = items.logEditorCountWords;
    document.getElementById('log_editor_show_insertion_popup').value = items.logEditorShowInsertionPopup;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('saveButton').addEventListener('click', save_options);