const runFriendLogListFeature = function () {
    const resultDisplay = $('div.CacheDetailNavigation'),
        friendLogList = $('<ul id="friendLogList">');

    friendLogList.append('<img id="friendLogListSpinner" src="' + chrome.runtime.getURL('img/friendLogList/spinner.gif') + '">');
    resultDisplay.append(friendLogList);

    let tokenLoadingAttempts = 0;
    setTimeout(loadUserToken, 100);

    function loadUserToken() {
        tokenLoadingAttempts++;
        let tokenHolder = $('#gc-utils-token-helper');
        const userToken = tokenHolder.attr('data-gc-utils-token');

        if (userToken !== undefined) {
            tokenHolder.remove();
            loadFriendLogs(1, userToken);
        } else {
            if (tokenLoadingAttempts === 20) {
                tokenHolder.remove();
                // we waited 2 seconds, something must be wrong. Let the function handle the error.
                loadFriendLogs(1, undefined);
            } else {
                setTimeout(loadUserToken, 100);
            }
        }
    }

    function loadFriendLogs(page, userToken) {
        if (userToken === undefined) {
            loadingDone();
            friendLogList.text(chrome.i18n.getMessage('friend_log_list_error'));
            return;
        }

        $.getJSON('/seek/geocache.logbook', {
            tkn: userToken,
            idx: page,
            num: 100,
            sp: false,
            sf: true,
            decrypt: false
        }).done(function (response) {
            if (response.status !== 'success') {
                loadingDone();
                friendLogList.text(chrome.i18n.getMessage('friend_log_list_error'));
            } else {
                if (response.pageInfo.idx < response.pageInfo.totalPages) {
                    // load more friend logs if there are pages left
                    loadFriendLogs(++page, userToken);
                } else {
                    loadingDone();
                    addDomElementsBasedOnResponse(response.data);
                }
            }
        });
    }

    function addDomElementsBasedOnResponse(data) {
        if (data.length === 0) {
            friendLogList.text(chrome.i18n.getMessage('friend_log_list_no_friend_logs'));
            return;
        }

        $.each(data, (index, value) => {
            let popup = Utils.getInstance().createGeocachingUtilsPopup('logDetailPopup');
            popup.getPopupContentContainer().append('<div class="hoverBridge"/>').append('<div class="LogContent markdown-output">' + value.LogText + '<div>');
            popup.append('<div class="line"/>');

            if (value.Images.length !== 0) {
                appendImagesToPopup(popup, value.Images);
            }

            let avatar = (value.AvatarImage === '') ? '/images/default_avatar.png' : 'https://img.geocaching.com/user/avatar/' + value.AvatarImage;
            let userImage = $('<img class="friendAvatar" src="' + avatar + '">');
            let logDetailTable = $('<table class="logDetailTable">' +
                '<tr>' +
                '<td><img src="/images/logtypes/' + value.LogTypeImage + '"> ' + value.Visited + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td><a class="friendName" href="https://www.geocaching.com/profile/?guid=' + value.AccountGuid + '">' + value.UserName + '</a></td>' +
                '</tr>' +
                '</table>');
            let newFriendLogEntry = $('<li>').append(popup).append(userImage).append(logDetailTable);
            newFriendLogEntry.mouseenter(function () {
                popup.css({
                    top: newFriendLogEntry.position().top
                });
                popup.show();
            });
            newFriendLogEntry.mouseleave(function () {
                popup.hide();
            });

            friendLogList.append(newFriendLogEntry);
        });
    }

    function appendImagesToPopup(popup, images) {
        var imagesTable = $('<ul>').addClass('log-images-table');
        $.each(images, function (index, image) {
            var imageLink = '<li>' +
                '<a target="_blank" href="https://img.geocaching.com/cache/log/large/' + image.FileName + '">' +
                '<img title="Photo" alt="Photo" src="/images/icons/16/photo.png">' +
                '<span>' + image.Name + '</span>' +
                '</li>';
            imagesTable.append(imageLink);
        });
        popup.getPopupContentContainer().append(imagesTable);
    }

    function loadingDone() {
        $('#friendLogListSpinner').remove();
    }
};