//Simbologi Titik Sampel
const warnaKelurahan = {
          type: "simple-fill",
          color:[75, 86, 148,0],
          outline: {
            color: [75, 86, 148, 1],
            width: "1px",
            style: "solid"
          }
        };
      
const simbolKelurahan={simbol_Kelurahan:{
          type: "simple",
          title:"Batas Kelurahan",
          symbol: warnaKelurahan
        }};        
        
function ambilSimbolKelurahan(name) {
    if (simbolKelurahan[name]) {
        console.log(`🪟 Simbol Kelurahan "${name}" diambil`);
        return simbolKelurahan[name];
    } else {
        console.warn(`⚠️ Simbol Kelurahan "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.simbolKelurahan = simbolKelurahan ;
window.ambilSimbolKelurahan = ambilSimbolKelurahan;

console.log("📁 KelurahanSimbol.js berhasil di-load");