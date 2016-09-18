# ![image of elevation feature](source/img/appIcon48.png "Elevation Feature") Geocaching Utils ![image of elevation feature](source/img/appIcon48.png "Elevation Feature") 
Geocaching Utils is an extension for google chrome and chromium that allows you to add features to the geocaching.com website. You can download it from the chrome web store: [Geocaching Utils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)


Feel free to contribute (also to the planned features list) and report bugs.

##Features
- Show elevation next to the cache coordinates (supports meters & feet):

![image of elevation feature](readmeRcs/ElevationFeature.png
 "Elevation Feature")
 
- Show friend logs in the sidebar on the right: 

![image of friend list feature](readmeRcs/FriendListFeature.gif
 "Friend List Feature")
 
 
##Planned features so far
- Cache detail page:
	- Allow to open a cache position on google maps
	- *Allow to convert a word or sentence into numbers (German: "Buchstabenwortwert")*
	- Translate geocache detail content using google translator
	- Bring back the little map that Groundspeak killed a couple of months ago, that's more zoomed out and gives a region
	- Filter logs of a cache by type
	- Show last log date next to the trackable on to see if the trackable is still alive
- Trackable detail page:
	- Show a better travel map for trackables
	- Show traveled distance of a trackable next to the name on a geocache detail page
	- Filter logs of a cache by type
- Enrich log editor
	- Insert Signature (should be definable in the options pane of the extension)
- Pocket Queries:
	- Select all days in a column
	- Select all days for a certain query
- Show archived caches somewhere (or add a link to project gc)
- Show/Hide header in geoache map view
- Make the settings page of this extension nicer

##How to run this extension (DEVELOPMENT ONLY)
Note: This is only needed if you are working on the extension and want to try something on your local machine. If you just want to download and use the extension, get it from here: [Geocaching Utils](https://chrome.google.com/webstore/detail/geocaching-utils/aiddapoflafkbecobkoiakgagaijacaa)

1. Before you run the extension, fill in your Google API key in file source/js/script.js
2. Go to the extensions settings page in chrome (Make sure you have enabled the developer mode in chrome)
3. Click the "Load unpacked extension..." button
4. Select the "source" folder of this project
5. Navigate to geocaching.com and enjoy

##Release History
- 0.7.0 (currently in development)
	- Automatically decrypt hints (can be disabled in the settings page)
	- Added an icon to the log editor which allows one to choose smileys and tags (FTF, STF, TTF [project-gc.com style]) to be inserted into the log text
- 0.6.0
	- Friend names in the friend log list are now links to the friends profile
	- New extension icon: ![image of elevation feature](source/img/appIcon16.png "Elevation Feature") 
- 0.5.2
	- Show log image links in the friend log popups
	- Refactorings
- 0.5.1
	- Design improvements
- 0.5.0
	- Added settings page to allow the user to set the unit for the elevation feature
	- Added message if there were no friend logs
- 0.4.2
	- Initial Release