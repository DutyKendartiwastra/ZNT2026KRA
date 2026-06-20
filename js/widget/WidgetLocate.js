//Scale Bar
function initializeLocate(view) {
    console.log("🚀 initializeLocate dipanggil dari WidgetDefault.js");

    if (typeof window.createLocate !== "function") {
        console.error("❌ Locate masih belum tersedia di window!");
        return;
    }

    try {
        const Locate = window.createLocate;

        //FX UTAMA
        const lokasi = new Locate({
          view: view
        });
      
        view.ui.add(lokasi, {
            position: "top-left",
            index: 1   // tambahkan index agar tidak tertutup
        });
        //---------------------------

        window.locateWidget = lokasi;

        console.log("✅ Widget Lokasi berhasil ditambahkan");
        return lokasi;

    } catch (error) {
        console.error("❌ Error saat membuat widget lokasi:", error);
    }
}

window.initializeLocate = initializeLocate;