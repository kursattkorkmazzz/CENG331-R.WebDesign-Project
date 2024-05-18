const IP_LOCATOR_SERVICE = "http://ip-api.com/json/";

$(document).ready(function () {
  runLocationService();
});

// This function will get the location of the user based on the IP address
function runLocationService() {
  console.log("Location service run.");

  $.get(IP_LOCATOR_SERVICE, function (data) {
    $("#ip").text(data.query);
    $("#city_country").text(data.city + "/" + data.country);
    $("#lat").text(data.lat);
    $("#lon").text(data.lon);
  });
}
