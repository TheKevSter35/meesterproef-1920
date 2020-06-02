// Leaflet map ([long, lat], zoomlevel)
const mymap = L.map('mapid').setView([52.3667, 4.8945], 11);

const myIcon = L.icon({
    iconUrl: '../source/pictures/quiz.svg',
    // iconSize: [38, 95],
    iconSize: [50, 32],
    iconAnchor: [25, 16],
    // iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

const attribution   = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl       = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles         = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);
// L.marker([52.377956, 4.897070]).addTo(mymap);
L.marker([52.35776, 4.84169], { icon: myIcon }).addTo(mymap).bindPopup('<a href="http://localhost:5000/quiz-detail">Phishing</a><p>Test je phising kennis</p>');
L.marker([52.3179, 4.96082], { icon: myIcon }).addTo(mymap).bindPopup('<a href="http://localhost:5000/quiz-detail">GVB</a><p>Test je ov-chipkaart kennis</p>');
L.marker([52.40345, 4.93404], { icon: myIcon }).addTo(mymap).bindPopup('<a href="http://localhost:5000/quiz-detail">AH</a><p>Test je bonuskaart kennis</p>');
L.marker([52.37265, 4.84684], { icon: myIcon }).addTo(mymap).bindPopup('<a href="http://localhost:5000/quiz-detail">E-mail check</a><p>Test je e-mailadres kennis</p>');

// create a red polyline from an array of LatLng points
const latlngs = [
    [52.35776, 4.84169],
    [52.3179, 4.96082],
    [52.40345, 4.93404],
    [52.37265, 4.84684]
];

const polyline = L.polyline(latlngs, {color: 'blue'}).addTo(mymap);
// zoom the map to the polyline
mymap.fitBounds(polyline.getBounds());