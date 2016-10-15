
function saveOptions(){
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
  }, function(){
    var status = document.getElementById('statusDisplay');
    status.textContent = chrome.i18n.getMessage('settings_settings_saved');
    setTimeout(function() {
      status.textContent = '';
    }, 3000);
  });
}

function restoreOptions(){
  chrome.storage.sync.get({
    // concrete values in here define the default if nothing was set yet by the user
    elevationMeasurement: 'meters',
    automaticallyDecryptHints: 'true',
    logEditorCountWords: 'true',
    logEditorShowInsertionPopup: 'true',
    showElevation: 'true',
    showFriendLogs: 'true'
  }, function(items){
    document.getElementById('elevation_measurement').value = items.elevationMeasurement;
    if(items.automaticallyDecryptHints === 'true'){ document.getElementById('automatically_decrypt_hints').checked = true; }
    if(items.logEditorCountWords === 'true'){ document.getElementById('log_editor_count_words').checked = true; }
    if(items.logEditorShowInsertionPopup === 'true'){ document.getElementById('log_editor_show_insertion_popup').checked = true; }
    if(items.showElevation === 'true'){ document.getElementById('show_elevation').checked = true; }
    if(items.showFriendLogs === 'true'){ document.getElementById('show_friend_logs').checked = true; }
  });
}

function loadLabels(){
  function loadTextAndInsertInElementByKey(key){
    document.getElementById(key).innerHTML = chrome.i18n.getMessage(key);
  }

  loadTextAndInsertInElementByKey('settings_main_title');
  loadTextAndInsertInElementByKey('settings_detail_page_title');
  loadTextAndInsertInElementByKey('settings_detail_page_show_friend_logs');
  loadTextAndInsertInElementByKey('settings_detail_page_decrypt_hints');
  loadTextAndInsertInElementByKey('settings_detail_page_show_elevation');
  loadTextAndInsertInElementByKey('settings_elevation_meters');
  loadTextAndInsertInElementByKey('settings_elevation_feet');
  loadTextAndInsertInElementByKey('settings_log_editor_main_title');
  loadTextAndInsertInElementByKey('settings_log_editor_count_words');
  loadTextAndInsertInElementByKey('settings_log_editor_count_words_note');
  loadTextAndInsertInElementByKey('settings_log_editor_show_insertion_popup');
  loadTextAndInsertInElementByKey('settings_footnote');

  document.getElementById('saveButton').innerText = chrome.i18n.getMessage('settings_save_button');
}

document.addEventListener('DOMContentLoaded', loadLabels);
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);