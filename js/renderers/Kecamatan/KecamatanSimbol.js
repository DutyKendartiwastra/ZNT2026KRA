//Simbologi Titik Sampel
const warnaKecamatan = {
          type: "simple-fill",
          color:[255, 252, 155,0],
          outline: {
            color: [10, 41, 71, 1],
            width: "3px",
            style: "short-dash-dot-dot"
          }
        };
      
const simbolKecamatan={simbol_Kecamatan:{
          type: "simple",
          title:"Batas Kecamatan",
          symbol: warnaKecamatan
        }};        
        
function ambilSimbolKecamatan(name) {
    if (simbolKecamatan[name]) {
        console.log(`🪟 Simbol Kecamatan "${name}" diambil`);
        return simbolKecamatan[name];
    } else {
        console.warn(`⚠️ Simbol Kecamatan "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.simbolKecamatan = simbolKecamatan ;
window.ambilSimbolKecamatan = ambilSimbolKecamatan;

console.log("📁 KecamatanSimbol.js berhasil di-load");