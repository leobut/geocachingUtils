# ![](source/img/appIcon/appIcon48.png) GeocachingUtils ![](source/img/appIcon/appIcon48.png)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/aiddapoflafkbecobkoiakgagaijacaa.svg)](https://chrome.google.com/webstore/detail/geocachingutils/aiddapoflafkbecobkoiakgagaijacaa) [![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/aiddapoflafkbecobkoiakgagaijacaa.svg)](https://chrome.google.com/webstore/detail/geocachingutils/aiddapoflafkbecobkoiakgagaijacaa) [![Chrome Web Store](https://img.shields.io/chrome-web-store/price/nimelepbpejjlbmoobocpfnjhihnpked.svg)](https://chrome.google.com/webstore/detail/geocachingutils/aiddapoflafkbecobkoiakgagaijacaa)

GeocachingUtils is an extension for google chrome that adds some really nice features to the  [geocaching.com](http://www.geocaching.com) website. You can download it for free from the chrome web store: [GeocachingUtils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)

Feel free to contribute to the code or report bugs and feature requests.

# Development
[![Build Status](https://travis-ci.org/ControlTheBit/geocachingUtils.svg?branch=master)](https://travis-ci.org/ControlTheBit/geocachingUtils) [![devDependencies Status](https://david-dm.org/ControlTheBit/geocachingUtils/dev-status.svg)](https://david-dm.org/ControlTheBit/geocachingUtils?type=dev) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/cf87c3274b224e20b4be789ae76037f5)](https://www.codacy.com/app/ControlTheBit/geocachingUtils?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ControlTheBit/geocachingUtils&amp;utm_campaign=Badge_Grade) [![Greenkeeper badge](https://badges.greenkeeper.io/ControlTheBit/geocachingUtils.svg)](https://greenkeeper.io/)

**Note:** If you just want to download and use the extension, get it from here: [GeocachingUtils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)

The stuff described in this chapter is only needed if you are working on the extension and want to try something on your local machine. 

## How to setup the project locally
0. Install Node.js LTS (including npm)
1. Checkout this project
2. Open command line in the root folder of the project
3. Run `npm i` to install all dependencies
4. Run the `grunt` in the command line (You can find all available grunt tasks in the Gruntfile)

## How to run this extension
1. Go to the extensions settings page in Google Chrome (Make sure you have enabled the developer mode in the extension settings of Google Chrome)
2. Click the "Load unpacked extension..." button
3. Select the "build" folder (it's only available after you ran the "grunt build" command) of this project
4. Navigate to geocaching.com and enjoy

# Release History
The release history and change notes can be found [here](../../releases).
