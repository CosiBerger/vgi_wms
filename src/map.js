// Karte erstellen und auf Braunschweig zentrieren
const map = L.map("map").setView([48.781777, 11.736130], 3);

const topoMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/**
 * Aufgabe 1
 */

/**
 * Hansestadt Hamburg - Radverkehr
 * Website: https://geoportal-hamburg.de/geo-online/
 * Capabilities: https://geodienste.hamburg.de/HH_WMS_Radverkehrsnetz?SERVICE=WMS&REQUEST=GetCapabilities
 */
const radverkehrLayer = L.tileLayer.wms('https://geodienste.hamburg.de/HH_WMS_Radverkehrsnetz?', {
    layers: 'radwege_fahrradstrasse,radwege_gruenflaechen',
    transparent: true,
    format: 'image/png'
}).addTo(map);

/**
 * Aufgabe 2
 */

/**
 * Thema Geologie: Bodenuebersichtskarte 1:200.000 Bayern (LfU)
 * Website:https://www.lfu.bayern.de/umweltdaten/geodatendienste/index_detail.htm?id=5d87e523-efdd-452a-841c-8c9467d808bb&profil=WMS
 * Capabilities:https://www.lfu.bayern.de/gdi/wms/boden/buek200by?request=GetCapabilities&service=wms
 * 
 * Info:
 * Erst ab Zoomstuft 11 sichtbar
 */ 
const geologie = L.tileLayer.wms("https://www.lfu.bayern.de/gdi/wms/boden/buek200by?", {
    layers: "buek200",
    transparent: true,
    format: "image/png",
    version: "1.3.0",
});

/**
 * Thema Erdbeben: Global Earthquake Hazard Frequency and Distribution, v1 (1976 – 2002)
 * Website:https://sedac.ciesin.columbia.edu/data/set/ndh-earthquake-frequency-distribution/maps/services
 * Capabilities:https://sedac.ciesin.columbia.edu/geoserver/wms?request=GetCapabilities&service=wms
 */ 
const earthquake = L.tileLayer.wms("https://sedac.ciesin.columbia.edu/geoserver/wms?", {
    layers: "ndh:ndh-earthquake-frequency-distribution",
});

/**
 * Thema DGM: DIGITAL ELEVATION MODEL SRTM30 (Colored + Hillshade)
 * Website:https://www.terrestris.de/en/hoehenmodell-srtm30-wms/
 * Capabilities:https://ows.terrestris.de/osm/service?request=GetCapabilities&service=wms
 */ 
const dgm = L.tileLayer.wms("https://ows.terrestris.de/osm/service?", {
    layers: "SRTM30-Colored-Hillshade",
});

/**
 * Thema Wetter: Niederschlag in den letzten 7 Tagen in Iowa
 * Website:http://mesonet.agron.iastate.edu/ogc/
 * Capabilities:https://mesonet.agron.iastate.edu/cgi-bin/wms/iowa/rainfall.cgi?SERVICE=WMS&REQUEST=GetCapabilities
 */ 
 const weather = L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/iowa/rainfall.cgi?", {
    layers:"sevendays_rainfall_data",
    transparent: true,
    format: "image/png",
    version: "1.3.0",
});

/**
 * Thema Weltmeere / Ozeane: Maritime Boundaries
 * Website:https://www.marineregions.org/webservices.php
 * Capabilities:https://geo.vliz.be/geoserver/MarineRegions/wms?SERVICE=WMS&REQUEST=GetCapabilities
 */ 
 const ocean = L.tileLayer.wms("https://geo.vliz.be/geoserver/MarineRegions/wms?", {
    layers: "eez_boundaries",
    transparent: true,
    format: "image/png",
    version: "1.3.0",
});

/**
 * Aufgabe 3
 */

/**
 * Legende fuer den Weltmeere Dienst eingefuegt. Diese wird unten rechts auf der Karte angezeigt (default ist oben rechts).
 */
 L.wmsLegend("http://geo.vliz.be:80/geoserver/MarineRegions/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=eez_boundaries", "bottomright");


// Alle Layer werder zu einem Layer Control hinzugefuegt
L.control.layers ({"OpenTopoMap" : topoMap, "DGM": dgm, "Erdbeben": earthquake}, { "Radverkehr": radverkehrLayer, "Wetter": weather, "Weltmeere": ocean, "Geologie": geologie}).addTo(map);
