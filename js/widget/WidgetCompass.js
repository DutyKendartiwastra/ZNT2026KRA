//Scale Bar
function initializeCompass(view) {
    console.log("🚀 initializeCompass dipanggil dari WidgetDefault.js");

    if (typeof window.createCompass !== "function") {
        console.error("❌ Compass masih belum tersedia di window!");
        return;
    }

    try {
        const Compass = window.createCompass;

        //FX UTAMA
        const compassWidget = new Compass({
          view: view
        });
      
        view.ui.add(compassWidget, {
            position: "top-left",
            index: 1   // tambahkan index agar tidak tertutup
        });
        //---------------------------

        window.locateWidget = compassWidget;

        console.log("✅ Widget Kompas berhasil ditambahkan");
        return compassWidget;

    } catch (error) {
        console.error("❌ Error saat membuat widget kompas:", error);
    }
}

window.initializeCompass = initializeCompass;