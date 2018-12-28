this.runFriendLogListFeature = function() {
    var resultDisplay = $('div.CacheDetailNavigation'),
        friendLogList = $('<ul id="friendLogList">');

    friendLogList.append('<img id="friendLogListSpinner" src="' +
        chrome.extension.getURL('img/friendLogList/spinner.gif') + '">');
    resultDisplay.append(friendLogList);

    injectCodeToReadUserToken();
    loadFriendLogs(1);
    removeInjectedScriptFromDom();

    // set page default to 1 as soon as uglify can handle es6
    function loadFriendLogs(page) {
        var userToken = friendLogList.attr('data-userToken');
        $.getJSON('/seek/geocache.logbook', {
            tkn: userToken,
            idx: page,
            num: 100,
            sp: false,
            sf: true,
            decrypt: false
        }).done(function(response) {
            if(response.status !== 'success') {
                imDoneLoading();
                friendLogList.text(chrome.i18n.getMessage('friend_log_list_error'));
            } else {
                if(response.pageInfo.idx < response.pageInfo.totalPages) {
                    // load more friend logs if there are pages left
                    loadFriendLogs(++page);
                } else {
                    imDoneLoading();
                    addDomElementsBasedOnResponse(response.data);
                }
            }
        });
    }

    function addDomElementsBasedOnResponse(data) {
        if(data.length === 0) {
            friendLogList.text(chrome.i18n.getMessage('friend_log_list_no_friend_logs'));
        } else {
            $.each(data, function(index, value) {

                var popup = Common.getInstance().createGeocachingUtilsPopup('logDetailPopup'),
                    avatar = (value.AvatarImage === '') ? '/images/default_avatar.png' : 'https://img.geocaching.com/user/avatar/' + value.AvatarImage,
                    userImage = $('<img class="friendAvatar" src="' + avatar + '">'),
                    logDetailTable = $('<table class="logDetailTable"><tr><td><img src="/images/logtypes/' + value.LogTypeImage +
                        '"> ' + value.Visited +
                        '</td></tr><tr><td><a class="friendName" href="https://www.geocaching.com/profile/?guid=' +
                        value.AccountGuid + '">' + value.UserName + '</a></td></tr></table>'),
                    newFriendLogEntry;

                popup.getPopupContentContainer().append('<div class="hoverBridge"/><div class="LogContent markdown-output">' + value.LogText + '<div>');
                popup.append('<div class="line"/>');

                if(value.Images.length !== 0) {
                    appendImagesToPopup(popup, value.Images);
                }

                newFriendLogEntry = $('<li>').append(popup).append(userImage).append(logDetailTable);
                newFriendLogEntry.mouseenter(function() {
                    popup.css({
                        top: newFriendLogEntry.position().top
                    });
                    popup.show();
                });
                newFriendLogEntry.mouseleave(function() {
                    popup.hide();
                });

                friendLogList.append(newFriendLogEntry);
            });
        }
    }

    function appendImagesToPopup(popup, images) {
        var imagesTable = $('<ul>').addClass('log-images-table');
        $.each(images, function(index, image) {
            var imageLink = '<li>' +
                '<a target="_blank" href="https://img.geocaching.com/cache/log/large/' + image.FileName + '">' +
                '<img title="Photo" alt="Photo" src="/images/icons/16/photo.png">' +
                '<span>' + image.Name + '</span>' +
                '</li>';
            imagesTable.append(imageLink);
        });
        popup.getPopupContentContainer().append(imagesTable);
    }

    function imDoneLoading() {
        $('#friendLogListSpinner').remove();
    }

    /*
     * Insert a piece of code into the page that adds the userToken to the DOM of the friend list.
     * If it is not in the DOM, but e.g. in data(), the exchange of data das not work --> it must be in the DOM.
     * userToken is needed to load the friend logs and is not accessible otherwise within this script.
     */
    function injectCodeToReadUserToken() {
        var scriptElement = $('<script id="friendLogListScript">$("#friendLogList").attr("data-userToken", userToken);</script>');
        $('html').append(scriptElement);
    }

    function removeInjectedScriptFromDom() {
        $('#friendLogListScript').remove();
    }
};