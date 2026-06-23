//Simbologi Titik Sampel
const warnaKabupaten = {
          type: "simple-fill",
          color:[255, 252, 155,0],
          outline: {
            color: [17, 46, 129, 1],
            width: "3px",
            style: "short-dash-dash-dot-dot-dot"
          }
        };
      
const simbolKabupaten={simbol_Kabupaten:{
          type: "simple",
          title:"Batas Kabupaten",
          symbol: warnaKabupaten
        }};        
        
function ambilSimbolKabupaten(name) {
    if (simbolKabupaten[name]) {
        console.log(`🪟 Simbol Kabupaten "${name}" diambil`);
        return simbolKabupaten[name];
    } else {
        console.warn(`⚠️ Simbol Kabupaten "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.simbolKabupaten = simbolKabupaten ;
window.ambilSimbolKabupaten = ambilSimbolKabupaten;

console.log("📁 KabupatenSimbol.js berhasil di-load");