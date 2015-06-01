
/*This procedure has been identified with stackoverflow forum 
    Given a telephone number, it fetches all the review information
    associated with it.
*/

var yelpApiCall= function (phoneNumber, callback) {

    var auth = {
        consumerKey: "0tgGVhKzT13yqeVxuxUBNg",
        consumerSecret: "8YGVGDEBeZ6BMYtOKHN_ggqYIZU",
        accessToken: "-ekmG3v2vpxeEmXVnKfzv0OcKAvoUSdu",
        accessTokenSecret: "kppoygVQ43p5BWzfOCFt9LlnEE0",
        serviceProvider: {
            signatureMethod: "HMAC-SHA1"
        }
    };

    var accessor = {
        consumerSecret: auth.consumerSecret,
        tokenSecret: auth.accessTokenSecret
    };

    myParameters = [];

    myParameters.push(['phone', phoneNumber]);
    myParameters.push(['callback', 'cb']);
    myParameters.push(['oauth_consumer_key', auth.consumerKey]);
    myParameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    myParameters.push(['oauth_token', auth.accessToken]);
    myParameters.push(['oauth_signature_method', auth.serviceProvider.signatureMethod]);

    var myMessage = {
        'action': 'http://api.yelp.com/v2/phone_search', //Uses Yelp API Phone Search. 
        'method': 'GET',
        'parameters': myParameters
    }

    OAuth.setTimestampAndNonce(myMessage);
    OAuth.SignatureMethod.sign(myMessage, accessor);

    var parameterMap = OAuth.getParameterMap(myMessage.parameters);
    parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)

    $.ajax({
        'url': myMessage.action,
        'data': parameterMap,
        'cache': true,
        'dataType': 'jsonp',
        'success': function (data, textStats, XMLHttpRequest) {
            callback(data.businesses[0]);
        }
    }).fail(function (e) {
        $('#yelpReviewWindow').text("Error: Yelp data could not be loaded");  
    });                                                               
}



