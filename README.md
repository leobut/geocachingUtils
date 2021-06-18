[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/aiddapoflafkbecobkoiakgagaijacaa.svg)](https://chrome.google.com/webstore/detail/geocachingutils/aiddapoflafkbecobkoiakgagaijacaa) [![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/aiddapoflafkbecobkoiakgagaijacaa.svg)](https://chrome.google.com/webstore/detail/geocachingutils/aiddapoflafkbecobkoiakgagaijacaa)

GeocachingUtils is an extension for google chrome that adds some really nice features to the  [geocaching.com](http://www.geocaching.com) website. You can download it for free from the chrome web store: [GeocachingUtils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)

Feel free to contribute to the code or report bugs and feature requests.

# Development
[![Node.js CI](https://github.com/ControlTheBit/geocachingUtils/actions/workflows/node.js.yml/badge.svg)](https://github.com/ControlTheBit/geocachingUtils/actions/workflows/node.js.yml) ![Known Vulnerabilities](https://snyk.io/test/github/ControlTheBit/geocachingUtils/badge.svg)

## How to setup the project locally
0. Install Node.js LTS (including npm)
1. Checkout this project
2. Open command line in the root folder of the project
3. Run `npm i` to install all dependencies
4. Run the `grunt` in the command line (You can find all available grunt tasks at the very end of Gruntfile.js)

## How to run this extension
1. Go to the extensions settings page in Google Chrome (Make sure you have enabled the developer mode in the extension settings of Google Chrome)
2. Click the "Load unpacked extension..." button
3. Select the "build" folder (it's only available after you ran the "grunt build" command) of this project
4. Navigate to geocaching.com and enjoy

# Release History
The release history and change notes can be found [here](https://github.com/ControlTheBit/geocachingUtils/releases).
