function saveOptions() {
  var automaticallyDecryptHints = (document.getElementById('automatically_decrypt_hints').checked) ? 'true' : 'false',
    showFriendLogs = (document.getElementById('show_friend_logs').checked) ? 'true' : 'false';

  chrome.storage.sync.set({
    automaticallyDecryptHints: automaticallyDecryptHints,
    showFriendLogs: showFriendLogs
  }, function () {
    var status = document.getElementById('statusDisplay');
    status.textContent = chrome.i18n.getMessage('settings_settings_saved');
    setTimeout(function () {
      status.textContent = '';
    }, 3000);
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    // concrete values in here define the default if nothing was set yet by the user
    automaticallyDecryptHints: 'true',
    showFriendLogs: 'true'
  }, function (items) {
    if(items.automaticallyDecryptHints === 'true') {
      document.getElementById('automatically_decrypt_hints').checked = true;
    }
    if(items.showFriendLogs === 'true') {
      document.getElementById('show_friend_logs').checked = true;
    }
  });
}

function loadLabels() {
  function loadTextAndInsertInElementByKey(key) {
    document.getElementById(key).innerHTML = chrome.i18n.getMessage(key);
  }

  loadTextAndInsertInElementByKey('settings_main_title');
  loadTextAndInsertInElementByKey('settings_detail_page_title');
  loadTextAndInsertInElementByKey('settings_detail_page_show_friend_logs');
  loadTextAndInsertInElementByKey('settings_detail_page_decrypt_hints');
  loadTextAndInsertInElementByKey('settings_footnote');

  document.getElementById('saveButton').innerText = chrome.i18n.getMessage('settings_save_button');
}

document.addEventListener('DOMContentLoaded', loadLabels);
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);