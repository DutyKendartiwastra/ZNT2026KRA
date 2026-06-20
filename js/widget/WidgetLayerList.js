//Scale Bar
function initializeLayerList(view) {
    console.log("🚀 initializeLayerList dipanggil dari WidgetDefault.js");

    if (typeof window.createLayerList !== "function") {
        console.error("❌ LayerList masih belum tersedia di window!");
        return;
    }

    if (typeof window.createExpand !== "function") {
        console.error("❌ Expand masih belum tersedia di window!");
        return;
    }

    try {
        const LayerList = window.createLayerList;
        const Expand=window.createExpand;

        //FX UTAMA
        const daftar_layer=new Expand({
              content: new LayerList({view: view,}),                          
              view: view,
              group: "top-left"})
        
        view.ui.add(daftar_layer, {
            position: "bottom-left",
            index: 1   // tambahkan index agar tidak tertutup
        })
        //---------------------------

        window.LayerListWidget = daftar_layer;

        console.log("✅ Layer List berhasil ditambahkan");
        return daftar_layer;

    } catch (error) {
        console.error("❌ Error saat membuat widget layer list:", error);
    }
}

window.initializeLayerList = initializeLayerList;