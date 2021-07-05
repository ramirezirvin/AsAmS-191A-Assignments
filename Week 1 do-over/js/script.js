const map = L.map('map').setView([34.0522, -118.2436], 5);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker = L.marker([38.568, -107.733]).addTo(map)
		.bindPopup('Black Canyon of the Gunnison ')
		.openPopup();

let othermarker = L.marker([36.1679, -116.6222]).addTo(map)
		.bindPopup('Death Valley ')
		.openPopup();

let othermarker1 = L.marker([37.6251, -119.0850]).addTo(map)
		.bindPopup('Devils Postpile ')
		.openPopup();

let othermarker2 = L.marker([40.4927, -108.9416]).addTo(map)
		.bindPopup('Dinosaur ')
		.openPopup();

let othermarker3 = L.marker([36.1069, -112.1129]).addTo(map)
		.bindPopup('The Grand Canyon ')
		.openPopup();

let othermarker4 = L.marker([40.4406, -111.7094]).addTo(map)
		.bindPopup('Timpanogos Caves ')
		.openPopup();