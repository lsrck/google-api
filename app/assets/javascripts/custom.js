function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,};
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  //marker
  var myCenter = new google.maps.LatLng(51.508742,-0.120850); 
  var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
  //markerzoom
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
  }); 
}


