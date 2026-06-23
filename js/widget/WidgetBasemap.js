//Scale Bar
function initializeBasemap(view) {
    console.log("🚀 initializeBasemap dipanggil dari WidgetBasemap.js");

    if (typeof createBasemapToggle !== "function") {
        console.error("❌ Basemap Toggle masih belum tersedia di window!");
        return;
    }

    try {
        const BasemapToggle =createBasemapToggle;

        //FX UTAMA
        const toggle = new BasemapToggle({
          view: view,
          nextBasemap: "hybrid"
        });

        view.ui.add(toggle, {
            position: "bottom-left",
            index: 1   // tambahkan index agar tidak tertutup
        });
        //---------------------------

        window.basemapWidget = toggle;

        console.log("✅ Widget basemap berhasil ditambahkan");
        return toggle;

    } catch (error) {
        console.error("❌ Error saat membuat widget basemap:", error);
    }
}

window.initializeBasemap = initializeBasemap;