# ![](source/img/appIcon/appIcon48.png) GeocachingUtils ![](source/img/appIcon/appIcon48.png) 
GeocachingUtils is an extension for google chrome that adds features to the  [geocaching.com](http://www.geocaching.com) website. You can download it for free from the chrome web store: [GeocachingUtils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)

Feel free to contribute to the code or report bugs and feature requests.

##Features
- [Show elevation](readMeResources/ElevationFeature.png)  next to the cache coordinates (supports meters & feet)
- [Show friend logs](readMeResources/FriendListFeature.gif) in the sidebar on the right
- Log editor is improved to [make using smileys and tags easier](readMeResources/EditorEnhancementFeature.gif) and [predict the "The Author" badge](readMeResources/EditorEnhancementWordCountFeature.gif) that you will earn when writing a new log
- Hints are decrypted automatically without clicking on "Decrypt" (can be changed in the settings)
- This extention is currently available in English and German

#Development [![Build Status](https://travis-ci.org/ControlTheBit/geocachingUtils.svg?branch=master)](https://travis-ci.org/ControlTheBit/geocachingUtils) [![devDependencies Status](https://david-dm.org/ControlTheBit/geocachingUtils/dev-status.svg)](https://david-dm.org/ControlTheBit/geocachingUtils?type=dev) [![Code Climate](https://codeclimate.com/github/ControlTheBit/geocachingUtils/badges/gpa.svg)](https://codeclimate.com/github/ControlTheBit/geocachingUtils)

##How to run this extension
Note: This is only needed if you are working on the extension and want to try something on your local machine. If you just want to download and use the extension, get it from here: [GeocachingUtils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)

1. Go to the extensions settings page in chrome (Make sure you have enabled the developer mode in chrome)
2. Click the "Load unpacked extension..." button
3. Select the "source" folder of this project
4. Navigate to geocaching.com and enjoy

##How to setup the project locally
1. Checkout this project
2. Have Node.js and NPM installed
3. Open command line in the root folder of the project
4. Run `npm install --save-dev` to install all dependecies (has to be done once)
5. Run the commands you want:
	- `grunt cleanUp` to clean up your local development environment
	- `grunt build` to run `cleanUp`, jsHint and cssLint
	- `grunt` to run `build`, js uglification, css&json minification and create a package ready for chrome web store

#Release History
- 1.0.1 (in development)
	- Added support for rich text friend logs (Issue [#43](/../../issues/43))
- 1.0.0
	- Added German translation
	- Various bugfixes
- 0.9.2
	- Fixed a bug that messed up the geocaching detail page when there were a lot of friend logs
- 0.9.0
	- Log Editor:
		- Count the words in your log text and predict the "The Author" badge you will earn. (Badge provided by [BadgeGen](http://www.badgegen.com/), Badges can be seen on e.g. [Project-GC](http://www.project-gc.com/))
		- Enable / disable smiley and tag insertion tool in the settings
		- Enable / disable word counting feature in the settings
	- Geocache detail page:
		- Enable / disable elevation feature in the settings
		- Enable / disable friend log list feture in the settings
- 0.8.0
	- Click the extension icon to open the settings
	- Redesigned the settings page
- 0.7.1
	- Automatically decrypt hints (can be disabled in the settings page)
	- Added an icon to the log editor which allows one to choose smileys and tags (FTF, STF, TTF [project-gc.com style]) to be inserted into the log text
- 0.6.0
	- Friend names in the friend log list are now links to the friends profile
	- New extension icon: ![](source/img/appIcon/appIcon16.png) 
- 0.5.2
	- Show log image links in the friend log popups
- 0.5.1
	- Design improvements
- 0.5.0
	- Added settings page to allow the user to set the unit for the elevation feature
	- Added message if there are no friend logs for the current cache
- 0.4.2
	- Initial Release
