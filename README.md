Neighborhood-Assignment project
===============================
What is it?
-----------
	This project lists some of the important locations around my neighborhood and these locations are
	shown in Google Maps.
	These locations are further associated with suitable icons. 
	These Icons are provided by Google.
API's used
-------------
Google Geocoding API
-------------------

	While we can identify all the relevant attributes of a given location (such as name, phone, website, 
	type (school or bar or restaurant) etc), however I took Google Geocoder API to decipher
	the latitude & longitude and later identied such locations on google maps.
	I had to regsiter with Google API & obtained an API key for accessing this geocoder information. 
	This API key is included in the html file.
	Since there is a limitation on how much data can be accessed, I have included only limited locations.

Yelp API
-------------------
	Given a business phone, Yelp is exposing an API for developers to extract the reviews for this business.
	I have also regsitered with Yelp API for accessing the feature.

Important Features
---------------------

The following features are implemented.
1) when the maps shows up, the markers for the locations are introduced asynchronously with drop animation.
2) when the user clicks on the button the sidebar the corresponding location shows up in the map using bounce animation.
3) when the user clicks on the marker, an API call is made to Yelp to derive the review ratings for the given business unit.

How to use this feature
---------------------------

You can open the index.html either through a server or directly on a browser.
The sidebar lists all the relevant locations.
Google maps should automatically show all those locations with relevant icons.
when we click on any button on the sidebar, the corresponding marker is highlighted on the map with the marker.
when the user clicks on the marker on the map, this application makes a call to Yelp API 
and later it shows up the data it obtained from Yelp.  

References
----------------------

http://Stackoverflow.com forums
http://w3schools.com
Google API documentation (https://developers.google.com/maps/documentation/geocoding/)
Yelp API (https://www.yelp.com/developers/documentation)
Google maps Icons (https://google-maps-icons.googlecode.com/files/map-icons-collection-2.0.zip)
