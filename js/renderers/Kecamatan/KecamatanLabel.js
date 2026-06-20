//Label Kelurahan
const labelKecamatan={label_Kecamatan:{
    symbol: {
          type: "text",
            color: [247, 249, 242],           // warna putih agak kuning
            haloColor: [0, 0, 0, 1],             // outline hitam
            haloSize: 1,
            font: {
                family: "Avenir Next LT Pro Regular",
                size: 14,
                weight: "bold"
            }
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.KEC"
        },
        minScale: 150000,
        maxScale: 50000,
}};

function ambilLabelKecamatan(name) {
    if (labelKecamatan[name]) {
        console.log(`🪟 Label Kecamatan "${name}" diambil`);
        return labelKecamatan[name];
    } else {
        console.warn(`⚠️ Label Kecamatan "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.labelKecamatan = labelKecamatan;
window.ambilLabelKecamatan = ambilLabelKecamatan;

console.log("📁 KecamatanLabel.js berhasil di-load");