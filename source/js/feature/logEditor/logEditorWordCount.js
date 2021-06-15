this.runLogEditorWordCount = function () {
    var common = LogEditorCommon.getInstance(),
        textArea = $('textarea.log-text'),
        popup = Common.getInstance().createGeocachingUtilsPopup('logEditorPopup logEditorPopupWordCount'),
        toolbarElement = $('<li id="geoachingUtilsWordCount"><img></li>'),
        availableTheAuthorBadges;

    loadAvailableTheAuthorBadges();

    toolbarElement.append(popup);
    popup.getPopupContentContainer().append('<img>').append('<span>');

    toolbarElement.mouseenter(function () {
        popup.show();
    });
    toolbarElement.mouseleave(function () {
        popup.hide();
    });

    common.toolbar.append(toolbarElement);
    defineAndDisplayImage(0);

    textArea.on('input', function () {
        var currentText = textArea.val(),
            currentWordCount = countWords(currentText);
        defineAndDisplayImage(currentWordCount);
    });

    function defineAndDisplayImage(wordCount) {
        var badge;
        $.each(availableTheAuthorBadges, function (index, value) {
            if (wordCount >= value.requiredWordCount) {
                badge = value;
            }
        });
        updateWordCountImage(badge, wordCount);
    }

    function updateWordCountImage(badge, wordCount) {
        var imagePathPrefix = 'img/logEditor/',
            imagePath = chrome.extension.getURL(imagePathPrefix + badge.image),
            smallImagePath = chrome.extension.getURL(imagePathPrefix + badge.smallImage),
            badgeTitle = (badge.isHighestBadge === true) ? chrome.i18n.getMessage('log_editor_word_count_highest_badge') : chrome.i18n.getMessage('log_editor_word_count_keep_going');

        $('#geoachingUtilsWordCount img').attr('src', smallImagePath);

        popup.find('img').attr('src', imagePath).attr('title', badgeTitle);
        popup.find('span').text(chrome.i18n.getMessage('log_editor_word_count_words') + wordCount);
    }

    // from http://stackoverflow.com/a/18679657/527718, but slightly improved
    function countWords(s) {
        s = s.replace(/\n /, '\n'); // exclude newline with a start spacing
        s = s.replace(/\n/g, ' '); // replace newline with space
        s = s.replace(/(^\s*)|(\s*$)/gi, ''); // exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi, ' '); // 2 or more space to 1

        if (s === '') {
            return 0;
        } else {
            return s.split(' ').length;
        }
    }

    function loadAvailableTheAuthorBadges() {
        availableTheAuthorBadges = [{
            image: 'WritBg.png',
            smallImage: 'WritBg_small.png',
            requiredWordCount: 0,
            isHighestBadge: false
        },
            {
                image: 'WritB.png',
                smallImage: 'WritB_small.png',
                requiredWordCount: 30,
                isHighestBadge: false
            },
            {
                image: 'WritS.png',
                smallImage: 'WritS_small.png',
                requiredWordCount: 40,
                isHighestBadge: false
            },
            {
                image: 'WritG.png',
                smallImage: 'WritG_small.png',
                requiredWordCount: 50,
                isHighestBadge: false
            },
            {
                image: 'WritP.png',
                smallImage: 'WritP_small.png',
                requiredWordCount: 60,
                isHighestBadge: false
            },
            {
                image: 'WritR.png',
                smallImage: 'WritR_small.png',
                requiredWordCount: 70,
                isHighestBadge: false
            },
            {
                image: 'WritSa.png',
                smallImage: 'WritSa_small.png',
                requiredWordCount: 80,
                isHighestBadge: false
            },
            {
                image: 'WritE.png',
                smallImage: 'WritE_small.png',
                requiredWordCount: 90,
                isHighestBadge: false
            },
            {
                image: 'WritD.png',
                smallImage: 'WritD_small.png',
                requiredWordCount: 100,
                isHighestBadge: true
            }
        ];
    }
};