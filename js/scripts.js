
/* This identifies all the map options */
var mapOptions = {
    center: new google.maps.LatLng(37.773817, -121.924777),
    zoom: 13
};

/*  Initialize the map as a global variable     
*/

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

/* This is a singleton google InfoWindow for showing Yelp API review results */
var infowindow = new google.maps.InfoWindow({
    content: "<div id='yelpReviewWindow'></div>",
    maxWidth: 250
});

/* This MODEL represents all the interested locations */

var locationsModel = [
    {
        title: "The Bishop Grill",
        address: "2600 Bishop Dr, San Ramon, CA 94583",
        website: "http://marriott.com",
        phone: "(925) 244-6114",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Brass Door",
        address: "2154 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "http://brassdoor.com",
        phone: "(925) 837-2501",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Zachary's Chicago Pizza",
        address: "3110 Crow Canyon Place, San Ramon, CA 94583",
        website: "http://zacharys.com",
        phone: "(925) 244-1222",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Clementine's Restaurant",
        address: "18070 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "http://clementinesca.com",
        phone: "(925) 973-0433",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Dougherty Vly Hg. School",
        address: "10550 Albion Rd, San Ramon, CA 94582",
        website: "http://dvhigh.net",
        phone: "(925) 479-6400",
        status: ko.observable("OK"),
        type: "school",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/school.png",
				    map: map
				}
		)
    },
    {
        title: "Coyote Creek Ele. School",
        address: "8700 N Gale Ridge Rd, San Ramon, CA 94582",
        website: "http://ckes.srvusd.k12.ca.us",
        phone: "(925) 735-1183",
        status: ko.observable("OK"),
        type: "school",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/school.png",
				    map: map
				}
		)
    },
    {
        title: "Iron Horse Md. School",
        address: "12601 Alcosta Blvd, San Ramon, CA 94583",
        website: "http://ih.schoolloop.com",
        phone: "(925) 824-2820",
        status: ko.observable("OK"),
        type: "school",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/school.png",
				    map: map
				}
		)
    },
    {
        title: "Target",
        address: "2610 Bishop Dr, San Ramon, CA 94583",
        website: "http://target.com",
        phone: "(925) 277-0202",
        status: ko.observable("OK"),
        type: "shopping",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "HomeGoods",
        address: "120 Sunset Dr, San Ramon, CA 94583",
        website: "homegoods.com",
        phone: "(925) 277-1308",
        status: ko.observable("OK"),
        type: "shopping",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "Whole Foods Market",
        address: "100 Sunset Dr, San Ramon, CA 94583",
        website: "http://wholefoodsmarket.com",
        phone: "(925) 355-9000",
        status: ko.observable("OK"),
        type: "shopping",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "Applebee's",
        address: "17900 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "http://applebees.com",
        phone: "(925) 327-1400",
        status: ko.observable("OK"),
        type: "bar",
        marker: new google.maps.Marker(
                {
                    position: new google.maps.LatLng(0, 0),
                    icon: "images/bar.png",
                    map: map
                }
        )
    },
    {
        title: "Ascona Pizza Company",
        address: "11020 Bollinger Canyon Rd, San Ramon, CA 94582",
        website: "http://asconapizza.com",
        phone: "(925) 736-0606",
        status: ko.observable("OK"),
        type: "bar",
        marker: new google.maps.Marker(
                {
                    position: new google.maps.LatLng(0, 0),
                    icon: "images/bar.png",
                    map: map
                }
        )
    },
    {
        title: "Crown Billiards",
        address: "2416 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "bayareacrownbilliards.com",
        phone: "(925) 725-3900",
        status: ko.observable("OK"),
        type: "bar",
        marker: new google.maps.Marker(
                {
                    position: new google.maps.LatLng(0, 0),
                    icon: "images/bar.png",
                    map: map
                }
        )
    }
]

/* ====This is the View Model===== */

var locationMarkers = function (locations) {
    var self = this;
    self.filterCondition = ko.observable("");

    /*
        This computed function returns the filtered list
        of locations based on the filter criteria
        entered in the search field.
        
    */
    self.filteredLocations = ko.computed(function () {
        /* This resets all the markers on the map */
        for (var index = 0; index < locations.length; index++) {
            locations[index].marker.setMap(null);
        };

        var searchLocations = $.grep(locations, function (input) {
            var nameSearch = input.title.toLowerCase().indexOf(self.filterCondition().toLowerCase());
            var typeSearch = input.type.toLowerCase().indexOf(self.filterCondition().toLowerCase());
            return (((nameSearch > -1) || (typeSearch == 0 )) && (input.status() == "OK"))
        });

        /*  This assigns the filtered markers with a map
            This will limit the markers appearing on the map.
            This is done asynchronously.
        */
        for (var currentIndex = 0; currentIndex < searchLocations.length; currentIndex++) {
            setTimeout((function (result) {
                return function () {
                    result.marker.setMap(map);
                }
            }(searchLocations[currentIndex])), 500);
        };
        return searchLocations;
    });

    /* Use Google Geocoding API to identify the latitude and longitude 
    for the locations 
    These results are fetched asynchronously
    The markers are animated for their positioning
    */
    self.initlocations = function (currentLocation) {
        geocoder = new google.maps.Geocoder();
        if (currentLocation.marker.position.A == 0) {
            geocoder.geocode({ 'address': currentLocation.address }, function (results, status) {
                if (status === "OK") {
                    currentLocation.marker.position = results[0].geometry.location;
                    self.animateMarkers(currentLocation);
                } else if (status === "OVER_QUERY_LIMIT") {
                    /*  If for some reason, Google API does not return
                        results or number of queries exceed the limit stipulated,
                        we try to fetch the results another time asynchronously.
                    */
                    setTimeout(function () {
                        geocoder.geocode({ 'address': currentLocation.address }, function (results, status) {
                            if (results && results.length > 0) {
                                currentLocation.marker.position = results[0].geometry.location;
                                self.animateMarkers(currentLocation);
                            }
                        });
                    }, 3000);

                } else {
                    /* if for some reason the locations are not fetched
                    the status attribute is set to error and these errored 
                    status locations do not participate in filter or 
                    animated locations */
                    currentLocation.status = ko.observable("ERROR");
                    console.log("Unable to fetch results for the location " + currentLocation.title);
                }
            });
        }
    }

    /*
        This will initialize the location with correct latitude
        & longitude using Google Geocoder API.
        Additionally it will also set click events for the marker
        to fetch review data from Yelp API call.
    */
    self.initialize = function () {
        for (current in locations) {
            self.initlocations(locations[current]);
            self.addEventListener(locations[current]);
        }

    }

    /*
        When the user clicks on the sidebar button the specific 
        location is highlighed with animated marker.
    */

    self.animateMarker = function (currentLocation) {
        currentLocation.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () { currentLocation.marker.setAnimation(null) }, 1000);
    }

    /* 
        This function assigns animation property to the marker
        asynchronously.
    */

    self.animateMarkers = function (currentLocation) {
        setTimeout((function (currentcurrentLocation) {
            return function () {
                currentcurrentLocation.marker.setAnimation(google.maps.Animation.DROP);
            }
        })(currentLocation), 500);
    }


    /*
        This function assigns listeners tp the markers. On clicking the
        markers, the info window will show up with details from
        Yelp API.
    */
    self.addEventListener = function (currentLocation) {
        //Add event listener to each map marker to trigger the corresponding infowindow on click
        google.maps.event.addListener(currentLocation.marker, 'click', function () {

            //Request Yelp info, then format it, and place it in infowindow
            yelpApiCall(currentLocation.phone, function (data) {
                var contentString = "<div id='yelpReviewWindow'>" +
                                    "<h4><u>" + "<a href='" + data.url + "' target='_blank'>" + data.name + "</a>" + "</u></h4>" +
                                    "<p><b>Address</b> : " + data.location.address + "</p>" +
                                    "<p><b>Phone </b> : " + data.display_phone + "</p>" +
                                    "<p><b> Review Count </b>: " + data.review_count + "</p>" +
                                    "<img src='" + data.rating_img_url_large + "'><br>" +
                                    "<p> <b>Lastest Review </b>:" + data.snippet_text + "</p>" +
                                    "</div>";
                infowindow.setContent(contentString);
            });

            infowindow.open(map, currentLocation.marker);
        });
    }
}


/* These are the initializers */
var myLocations = new locationMarkers(locationsModel);
ko.applyBindings(myLocations);
google.maps.event.addDomListener(window, 'load', myLocations.initialize);
