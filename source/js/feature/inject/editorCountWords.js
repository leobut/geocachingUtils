console.log("hello")

let wordsDisplay, translation = {words: ""}

const initWordCount = () => {
    // check if jQuery is already initialized
    if (typeof $ === 'undefined') {
        setTimeout(initWordCount, 500);
        return;
    }

    let buttonBar = $('.rc-md-navigation > .navigation-nav.left > div.button-wrap');
    buttonBar.append('<span class="rc-md-divider"/>')

    wordsDisplay = $('<span style="padding: 5px"/>')
    buttonBar.append(wordsDisplay)

    translation.words = $("#gc-utils-editor-count-words").data("gc-translation-words")

    setInterval(displayWordCount, 500)
}

// from http://stackoverflow.com/a/18679657/527718, but slightly improved
const countWords = s => {
    s = s.replace(/\n /, '\n') // exclude newline with a start spacing
    s = s.replace(/\n/g, ' ') // replace newline with space
    s = s.replace(/(^\s*)|(\s*$)/gi, '') // exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, ' ') // 2 or more space to 1
    if (s === '') {
        return 0
    } else {
        return s.split(' ').length
    }
};

const displayWordCount = () => {
    let logText = $("#gc-md-editor_md").text()
    let wordCount = countWords(logText)
    wordsDisplay.text(wordCount + translation.words)
}

initWordCount()
