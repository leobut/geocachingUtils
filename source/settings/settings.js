
function save_options() {
    var elevationMeasurement = document.getElementById('elevation_measurement').value,
      automaticallyDecryptHints = (document.getElementById('automatically_decrypt_hints').checked) ? 'true' : 'false',
      logEditorCountWords = (document.getElementById('log_editor_count_words').checked) ? 'true' : 'false',
      logEditorShowInsertionPopup = (document.getElementById('log_editor_show_insertion_popup').checked) ? 'true' : 'false',
      showElevation = (document.getElementById('show_elevation').checked) ? 'true' : 'false',
      showFriendLogs = (document.getElementById('show_friend_logs').checked) ? 'true' : 'false';


  chrome.storage.sync.set({
    elevationMeasurement: elevationMeasurement,
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
    elevationMeasurement: 'meters',
    automaticallyDecryptHints: 'true',
    logEditorCountWords: 'true',
    logEditorShowInsertionPopup: 'true',
    showElevation: 'true',
    showFriendLogs: 'true'
  }, function(items) {
    document.getElementById('elevation_measurement').value = items.elevationMeasurement;
    if(items.automaticallyDecryptHints === 'true'){ document.getElementById('automatically_decrypt_hints').checked = true; }
    if(items.logEditorCountWords === 'true'){ document.getElementById('log_editor_count_words').checked = true; }
    if(items.logEditorShowInsertionPopup === 'true'){ document.getElementById('log_editor_show_insertion_popup').checked = true; }
    if(items.showElevation === 'true'){ document.getElementById('show_elevation').checked = true; }
    if(items.showFriendLogs === 'true'){ document.getElementById('show_friend_logs').checked = true; }
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('saveButton').addEventListener('click', save_options);