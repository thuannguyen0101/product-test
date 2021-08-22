function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 21.029151574720764, lng: 105.77395544629826};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 19,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}