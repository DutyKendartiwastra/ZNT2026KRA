//Scale Bar
function initializeScaleBar(view) {
    console.log("🚀 initializeScaleBar dipanggil dari layer.js");

    if (typeof window.createScaleBar !== "function") {
        console.error("❌ createScaleBar masih belum tersedia di window!");
        return;
    }

    try {
        const ScaleBar = window.createScaleBar;

        const skala = new ScaleBar({
            view: view,
            unit: "dual",
            style: "line"        // coba "line" atau "ruler"
        });

        view.ui.add(skala, {
            position: "bottom-right",
            index: 1   // tambahkan index agar tidak tertutup
        });

        window.scaleBarWidget = skala;

        console.log("✅ Scale Bar berhasil ditambahkan di bottom-right");
        return skala;

    } catch (error) {
        console.error("❌ Error saat membuat ScaleBar:", error);
    }
}

window.initializeScaleBar = initializeScaleBar;