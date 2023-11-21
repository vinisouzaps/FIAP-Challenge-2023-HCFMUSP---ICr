function initMap() {

  var options = {
    zoom: 8,
    center: { lat: -23.55052, lng: -46.633308 } 
  };


  var map = new google.maps.Map(document.getElementById('map'), options);

  
  var marker = new google.maps.Marker({
    position: { lat: -23.55545290850531, lng: -46.67283646171707 }, 
    map: map,
    title: 'HC'
  });
}

