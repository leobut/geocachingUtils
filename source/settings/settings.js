function saveOptions() {
    let automaticallyDecryptHints = (document.getElementById('automatically_decrypt_hints').checked) ? 'true' : 'false',
        logEditorCountWords = (document.getElementById('log_editor_count_words').checked) ? 'true' : 'false',
        showFriendLogs = (document.getElementById('show_friend_logs').checked) ? 'true' : 'false';

    chrome.storage.sync.set({
        automaticallyDecryptHints: automaticallyDecryptHints,
        logEditorCountWords: logEditorCountWords,
        showFriendLogs: showFriendLogs
    }, function () {
        let status = document.getElementById('statusDisplay');
        status.textContent = chrome.i18n.getMessage('settings_settings_saved');
        setTimeout(function () {
            status.textContent = '';
        }, 3000);
    });
}

function restoreOptions() {
    chrome.storage.sync.get({
        // default if nothing was set yet by the user
        automaticallyDecryptHints: 'true',
        logEditorCountWords: 'true',
        showFriendLogs: 'true'
    }, function (items) {
        if (items.automaticallyDecryptHints === 'true') {
            document.getElementById('automatically_decrypt_hints').checked = true;
        }
        if (items.logEditorCountWords === 'true') {
            document.getElementById('log_editor_count_words').checked = true;
        }
        if (items.showFriendLogs === 'true') {
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
    loadTextAndInsertInElementByKey('settings_log_editor_main_title');
    loadTextAndInsertInElementByKey('settings_log_editor_count_words');
    loadTextAndInsertInElementByKey('settings_log_editor_count_words_note');
    loadTextAndInsertInElementByKey('settings_footnote');

    document.getElementById('saveButton').innerText = chrome.i18n.getMessage('settings_save_button');
}

document.addEventListener('DOMContentLoaded', loadLabels);
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);