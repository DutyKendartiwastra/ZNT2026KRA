//Scale Bar
function initializeLegend(view) {
    console.log("🚀 initializeLegend dipanggil dari WidgetDefault.js");

    if (typeof window.createLegend !== "function") {
        console.error("❌ Compass masih belum tersedia di window!");
        return;
    }

    try {
        const Legend = window.createLegend;
        const Expand= window.createExpand;
        const Zona2026=window.Zona2026Layer;

        //FX UTAMA
        const legendWidget = new Expand({
          content: new Legend({
            view: view,
            style: "classic", // other styles include 'classic/classic'
            layerInfos: [
              {
                layer: Zona2026,
                title: "Zona Nilai Tanah"
              },
            ],
          view: view,
          expanded: false,
        })});
      
        view.ui.add(legendWidget, {
            position: "bottom-right",
            index: 1   // tambahkan index agar tidak tertutup
        });
        //---------------------------

        window.legendWidget = legendWidget;

        console.log("✅ Widget legend berhasil ditambahkan");
        return legendWidget;

    } catch (error) {
        console.error("❌ Error saat membuat widget legend:", error);
    }
}

window.initializeLegend = initializeLegend;