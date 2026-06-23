// js/widget/WidgetInitializer.js

function initializeDefaultWidgets(view) {
    console.log("🚀 Memulai inisialisasi default widgets...");

    const DefaultWidgets = [
        { 
            name: "ScaleBar", 
            init: window.initializeScaleBar 
        },
        { 
            name: "Locate", 
            init: window.initializeLocate 
        },
        { 
            name: "LayerList", 
            init: window.initializeLayerList
        },
        {
            name: "Search", 
            init: window.initializeSearch
        },
        {
            name: "Basemap", 
            init: window.initializeBasemap
        },
        {
            name: "Kompas", 
            init: window.initializeCompass
        },
        {
            name: "Legend", 
            init: window.initializeLegend
        }
        
        // Tambah widget baru di sini nanti
    ];

    let success = 0;

    DefaultWidgets.forEach(DefaultWidgets => {
        if (typeof DefaultWidgets.init === "function") {
            try {
                console.log(`🔧 Inisialisasi ${DefaultWidgets.name}...`);
                DefaultWidgets.init(view); // panggil default widget ke view
                success++;
            } catch (err) {
                console.error(`❌ Gagal ${DefaultWidgets.name}:`, err);
            }
        } else {
            console.warn(`⚠️ ${DefaultWidgets.name} belum terdaftar di window`);
        }
    });

    console.log(`✅ Berhasil menginisialisasi ${success} widget`);
}

// Daftarkan ke global
window.initializeDefaultWidgets = initializeDefaultWidgets;