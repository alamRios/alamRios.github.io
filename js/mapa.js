function initMap() {
  var escom = {lat: 19.504563, lng: -99.146880};
  var map = new google.maps.Map(document.getElementById('mapaEscom'), {
    zoom: 15,
    center: escom,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: escom,
    map: map
  });
}