
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40, lng:-94},
    zoom: 4
  });

  var input1 = document.getElementById('origin');
  var input2 = document.getElementById('destination');
  var autocomplete1 = new google.maps.places.Autocomplete(input1);
  var autocomplete2 = new google.maps.places.Autocomplete(input2);
  autocomplete1.bindTo('bounds', map);
  autocomplete2.bindTo('bounds', map);
  autocomplete1.setOptions({strictBounds: true});
  autocomplete2.setOptions({strictBounds: true});
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete1.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete1.getPlace();
    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(15);
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    var address1 = '';
    if (place.address_components) {
      address1 = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
    console.log(address1);

  });
  autocomplete2.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete2.getPlace();
    if (!place.geometry) {

      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(15);
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    var address2 = '';
    if (place.address_components) {
      address2 = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
    console.log(address2);

  });

}
