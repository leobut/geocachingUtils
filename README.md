# Geocaching Utils
Geocaching Utils is an extension for google chrome and chromium that allows you to add features to the geocaching.com website.
Feel free to contribute (also to the planned features list).

##Features
- Show elevation next to the cache coordinates: ![image of elevation feature](readmeRcs/ElevationFeature.png
 "Elevation Feature")
 
 
##Planned features so far
- Enrich log editor
	- Add smileys
	- Add FTF, STF and TTF tags
	- Insert Signature (should be definable in the options pane of the extension)
- Elevation: Allow to change the measurment unit used for the elevation (should be definable in the options pane of the extension OR can be read from the geocaching page)
- Show / Highlight friend logs
- Trackables:
	- Show a better travel map for trackables
	- Show traveled distance of a trackable next to the name on a geocache detail page
	- Show last log date next to the trackable on on a geocache detail page to see if the trackable is still alive


##How to run this extension
1. Before you run the extension, fill in your Google API key in file source/js/script.js
2. Go to the extensions settings page in chrome (Make sure you have enabled the developer mode in chrome)
3. Click the "Load unpacked extension..." button
4. Select the source folder of this project
5. Navigate to geocaching.com and enjoy