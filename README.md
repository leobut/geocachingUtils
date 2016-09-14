# Geocaching Utils
Geocaching Utils is an extension for google chrome and chromium that allows you to add features to the geocaching.com website. You can download it here from the chrome web store: [Geocaching Utils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)


Feel free to contribute (also to the planned features list) and report bugs.

##Features
- Show elevation next to the cache coordinates (supports meters & feet):

![image of elevation feature](readmeRcs/ElevationFeature.png
 "Elevation Feature")
 
- Show friend logs in the sidebar on the right: 

![image of friend list feature](readmeRcs/FriendListFeature.png
 "Friend List Feature")
 
 
##Planned features so far
- Enrich log editor
	- Add smileys
	- Add FTF, STF and TTF tags
	- Insert Signature (should be definable in the options pane of the extension)
- Trackables:
	- Show a better travel map for trackables
	- Show traveled distance of a trackable next to the name on a geocache detail page
	- Show last log date next to the trackable on on a geocache detail page to see if the trackable is still alive
- Translate geocache detail content using google translator
- Allow to write the same log for multiple field notes
- Convert a word or sentence into numbers (German: "Buchstabenwortwert")
- Filter logs of a cache/trackable by type
- Improve icon set
- Make the settings page nicer

##How to run this extension (DEVELOPMENT ONLY)
Note: This is only needed if you are working on the extension and want to try something on your local machine. If you just want to download and use the extension, get it from here: [Geocaching Utils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)

1. Before you run the extension, fill in your Google API key in file source/js/script.js
2. Go to the extensions settings page in chrome (Make sure you have enabled the developer mode in chrome)
3. Click the "Load unpacked extension..." button
4. Select the "source" folder of this project
5. Navigate to geocaching.com and enjoy

##Release History
- 0.5.1
	- Design improvements
- 0.5.0
	- Added settings page to allow the user to set the unit for the elevation feature
	- Added message if there were no friend logs
- 0.4.2
	- Initial Release