require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GeoJSONLayer"
], function(
    Map,
    MapView,
    GeoJSONLayer
) {
    window.createGeoJSONLayer = GeoJSONLayer;
    // ==================== MAP SETUP ====================
    const map = new Map({
        basemap: "streets-relief-vector"
    });

    const view = new MapView({
        container: "MukaPeta",
        map: map,
        zoom: 11,
        center: [110.948256, -7.594897]
    });

    // Load layer setelah map siap
    view.when(() => {
        console.log("✅ MapView siap");
        if (typeof initializeLayers === "function") {
            initializeLayers(map);
        }
    });
});