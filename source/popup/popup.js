document.getElementById('message_display').innerHTML = chrome.i18n.getMessage('popup_settings_already_open');
chrome.runtime.openOptionsPage();