// Karte erstellen und auf Braunschweig zentrieren
const map = L.map("map").setView([53.55, 10.0], 11);

// OpenStreetMap als Hintergrundkarte einbinden
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const energyLayer = L.tileLayer.wms('https://geodienste.hamburg.de/HH_WMS_Radverkehrsnetz?', {
    layers: 'radwege_fahrradstrasse,radwege_gruenflaechen,radwege_mischverkehr,radwege_schiebestrecke',
    transparent: true,
    format: 'image/png'
}).addTo(map);