const start = async () => {
    const settings = await chrome.storage.sync.get({
        automaticallyDecryptHints: 'true',
        logEditorCountWords: 'true',
        showFriendLogs: 'true'
    });

    if (Utils.getInstance().currentPageIsGeocacheDetailPage === true) {
        if (settings.automaticallyDecryptHints === 'true') {
            const scriptElement = document.createElement('script');
            scriptElement.id = 'gc-utils-decrypt-hint-script';
            scriptElement.src = chrome.runtime.getURL('js/feature/inject/autoDecryptHint.js');
            document.body.appendChild(scriptElement);
        }

        if (settings.showFriendLogs === 'true') {
            const scriptElement = document.createElement('script');
            scriptElement.id = 'gc-utils-token-helper-script';
            scriptElement.src = chrome.runtime.getURL('js/feature/inject/fetchUserToken.js');
            document.body.appendChild(scriptElement);

            runFriendLogListFeature();
        }
    }

    if (Utils.getInstance().currentPageContainsAnEditor === true) {
        if (settings.logEditorCountWords === 'true') {
            const jqueryElement = document.createElement('script');
            jqueryElement.id = 'gc-utils-jquery';
            jqueryElement.src = chrome.runtime.getURL('js/lib/jquery-3.7.1.min.js');
            document.body.appendChild(jqueryElement);

            const scriptElement = document.createElement('script');
            scriptElement.id = 'gc-utils-editor-count-words';
            scriptElement.src = chrome.runtime.getURL('js/feature/inject/editorCountWords.js');
            scriptElement.setAttribute("data-gc-translation-words", chrome.i18n.getMessage("log_editor_word_count_words"))
            document.body.appendChild(scriptElement);
        }
    }
}

start();