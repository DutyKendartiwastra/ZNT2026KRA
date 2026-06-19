//Label Zona
const labelZona = {label_Zona:{
    symbol: {
            type: "text",
            color: [247, 249, 242],           // warna putih agak kuning
            haloColor: [0, 0, 0, 1],             // outline hitam
            haloSize: 1,
            font: {
                family: "Avenir Next LT Pro Regular",
                size: 10,
                weight: "bold"
                
            }
        },
    labelPlacement: "always-horizontal",
    // === LABEL DENGAN LEBIH DARI 1 FIELD ===
    labelExpressionInfo: {
            expression: `
                $feature.NOZONE +TextFormatting.NewLine+ $feature.RPBULAT
            `
        },
    minScale: 10000,     // Label muncul mulai zoom ini ke atas (semakin dekat)
    maxScale: 1,
    removeDuplicateLabels: "all"       // Label hilang kalau zoom lebih dekat dari ini

}};

function ambilLabelZona(name) {
    if (labelZona[name]) {
        console.log(`🪟 Label Zona "${name}" diambil`);
        return labelZona[name];
    } else {
        console.warn(`⚠️ Simbol Zona "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.labelZona = labelZona;
window.ambilLabelZona = ambilLabelZona;

console.log("📁 ZonaLabel.js berhasil di-load");