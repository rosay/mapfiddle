app.controller("MapViewController", function($scope) {
    var map = new L.Map('map');

    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

    var options = {minZoom: 8, maxZoom: 12, attribution: osmAttrib};
    var osm = new L.TileLayer(osmUrl, options);

    // start the map in South-East England
    map.setView(new L.LatLng(51.3, 0.7),9);
    map.addLayer(osm);
});
