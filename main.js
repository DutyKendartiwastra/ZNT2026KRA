require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GeoJSONLayer",
    "esri/widgets/ScaleBar",
    "esri/widgets/Locate",
    "esri/widgets/LayerList",
    "esri/widgets/Expand",
    "esri/widgets/Search",
    "esri/widgets/BasemapToggle"
], function(
    Map,
    MapView,
    GeoJSONLayer,
    ScaleBar,
    Locate,
    LayerList,
    Expand,
    Search,
    BasemapToggle,
) {
    //push fx ke window
    window.createSearch=Search;
    window.createExpand=Expand;
    window.createLayerList=LayerList;
    window.createLocate=Locate;
    window.createScaleBar=ScaleBar;
    window.createGeoJSONLayer = GeoJSONLayer;
    window.createBasemapToggle=BasemapToggle;

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

    // ==================== Load layer dan widget setelah map siap ====================
    view.when(() => {
        console.log("✅ MapView siap");

        // === Panggil Layer di sini ===
        if (typeof initializeLayers === "function") {
            initializeLayers(map);
        }
        // === Panggil Default Widget di sini ===
        if (typeof window.initializeDefaultWidgets === "function") {
            console.log("🚀 Memanggil itializeDefaultWidgets...");
            window.initializeDefaultWidgets(view);
        }
        else {
            console.warn("⚠️ initializeDefaultWidgets belum tersedia");
        }
    });
});