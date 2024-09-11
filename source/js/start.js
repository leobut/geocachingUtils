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
            console.log("has editor")
        }
    }
}

start();