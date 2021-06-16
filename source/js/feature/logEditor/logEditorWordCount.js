this.runLogEditorWordCount = function () {
  let common = LogEditorCommon.getInstance(),
    textArea = $('textarea.log-text'),
    popup = Common.getInstance().createGeocachingUtilsPopup('logEditorPopup logEditorPopupWordCount'),
    toolbarElement = $('<li id="geoachingUtilsWordCount"><img id="geoachingUtilsWordCountMiniBadge"></li>'),
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
    let badge;
    $.each(availableTheAuthorBadges, function (index, value) {
      if(wordCount >= value.requiredWordCount) {
        badge = value;
      }
    });
    updateWordCountImage(badge, wordCount);
  }

  function updateWordCountImage(badge, wordCount) {
    let badgeTitle = (badge.isHighestBadge === true) ? chrome.i18n.getMessage('log_editor_word_count_highest_badge') : chrome.i18n.getMessage('log_editor_word_count_keep_going');

    $('#geoachingUtilsWordCount img').attr('src', badge.smallImage);

    popup.find('img').attr('src', badge.image).attr('title', badgeTitle);
    popup.find('span').text(chrome.i18n.getMessage('log_editor_word_count_words') + wordCount);
  }

  // from http://stackoverflow.com/a/18679657/527718, but slightly improved
  function countWords(s) {
    s = s.replace(/\n /, '\n'); // exclude newline with a start spacing
    s = s.replace(/\n/g, ' '); // replace newline with space
    s = s.replace(/(^\s*)|(\s*$)/gi, ''); // exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, ' '); // 2 or more space to 1

    if(s === '') {
      return 0;
    } else {
      return s.split(' ').length;
    }
  }

  function loadAvailableTheAuthorBadges() {
    availableTheAuthorBadges = [
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?quality=B',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?quality=B&notitle',
        requiredWordCount: 0,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=B',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=B&notitle',
        requiredWordCount: 30,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=S',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=S&notitle',
        requiredWordCount: 40,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=G',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=G&notitle',
        requiredWordCount: 50,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=P',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=P&notitle',
        requiredWordCount: 60,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=R',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=R&notitle',
        requiredWordCount: 70,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=Sa',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=Sa&notitle',
        requiredWordCount: 80,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=E',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=E&notitle',
        requiredWordCount: 90,
        isHighestBadge: false
      },
      {
        image: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=D',
        smallImage: 'https://cdn2.project-gc.com/dimages/badgegen-v4-badge.php?icon=TheAuthor&quality=D&notitle',
        requiredWordCount: 100,
        isHighestBadge: true
      }
    ];
  }
};