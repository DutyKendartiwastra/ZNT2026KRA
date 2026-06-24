// =============================================
// 1. Renderer Murni (Ini yang akan dipakai oleh layer)
const rendererTitikSampel = {
    type: "unique-value",
    field: "Zoning/ Peruntukan",

    uniqueValueInfos: [
        {
            value: "1",
            label: "Non Pertanian",
            symbol: {
                type: "simple-marker",
                size: 12,
                color: [255, 140, 0],           // Orange
                outline: { color: [255, 255, 255], width: 1.5 }
            }
        },
        {
            value: "2",
            label: "Pertanian",
            symbol: {
                type: "simple-marker",
                size: 12,
                color: [34, 139, 34],           // Hijau
                outline: { color: [255, 255, 255], width: 1.5 }
            }
        }
        // Tambahkan value lain di sini sesuai data
    ],

    defaultSymbol: {
        type: "simple-marker",
        size: 9,
        color: [169, 169, 169],
        outline: { color: [255, 255, 255], width: 1 }
    },

    legendOptions: {
        title: "Zoning / Peruntukan"
    }
};

// 2. Struktur Simbol (seperti biasa kamu pakai)
const simbolSampel = {
    simbol_Sampel: {
        type: "simple",
        title: "Titik Sampel",
        symbol: rendererTitikSampel          // ← menghubungkan ke renderer
    }
};

// -------------------------------------------------- Helper function
function ambilSimbolSampel(name) {
    if (simbolSampel[name]) {
        console.log(`🪟 Simbol Sampel "${name}" diambil`);
        return simbolSampel[name];
    } else {
        console.warn(`⚠️ Simbol Sampel "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export
window.simbolSampel = simbolSampel;
window.rendererTitikSampel = rendererTitikSampel;   // untuk debug
window.ambilSimbolSampel = ambilSimbolSampel;

console.log("📁 SampelSimbol.js berhasil di-load ✅");