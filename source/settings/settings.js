
function save_options() {
  var elevationMeasurement = document.getElementById('elevation_measurement').value,
      automaticallyDecryptHints = document.getElementById('automatically_decrypt_hints').value,
      logEditorCountWords = document.getElementById('log_editor_count_words').value,
      logEditorShowInsertionPopup = document.getElementById('log_editor_show_insertion_popup').value,
      showElevation = document.getElementById('show_elevation').value,
      showFriendLogs = document.getElementById('show_friend_logs').value;


  chrome.storage.sync.set({
    elevation_measurement: elevationMeasurement,
    automaticallyDecryptHints: automaticallyDecryptHints,
    logEditorCountWords: logEditorCountWords,
    logEditorShowInsertionPopup: logEditorShowInsertionPopup,
    showElevation: showElevation,
    showFriendLogs: showFriendLogs
  }, function() {
    var status = document.getElementById('statusDisplay');
    status.textContent = chrome.i18n.getMessage('settings_settings_saved');
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
    logEditorShowInsertionPopup: 'true',
    showElevation: 'true',
    showFriendLogs: 'true'
  }, function(items) {
    document.getElementById('elevation_measurement').value = items.elevation_measurement;
    document.getElementById('automatically_decrypt_hints').value = items.automaticallyDecryptHints;
    document.getElementById('log_editor_count_words').value = items.logEditorCountWords;
    document.getElementById('log_editor_show_insertion_popup').value = items.logEditorShowInsertionPopup;
    document.getElementById('show_elevation').value = items.showElevation;
    document.getElementById('show_friend_logs').value = items.showFriendLogs;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('saveButton').addEventListener('click', save_options);