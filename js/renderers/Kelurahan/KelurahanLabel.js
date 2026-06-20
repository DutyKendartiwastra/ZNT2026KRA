//Label Kelurahan
const labelKelurahan={label_Kelurahan:{
    symbol: {
          type: "text",
          color: "#4B5694",
          font: {
            family: "Avenir Next LT Pro Regular",
            size: 12,
            weight: "bold",
          }
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.DESA"
        },
        minScale: 50000,
        maxScale: 10000,
}};

function ambilLabelKelurahan(name) {
    if (labelKelurahan[name]) {
        console.log(`🪟 Label Kelurahan "${name}" diambil`);
        return labelKelurahan[name];
    } else {
        console.warn(`⚠️ Label Kelurahan "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.labelKelurahan = labelKelurahan;
window.ambilLabelKelurahan = ambilLabelKelurahan;

console.log("📁 KelurahanLabel.js berhasil di-load");