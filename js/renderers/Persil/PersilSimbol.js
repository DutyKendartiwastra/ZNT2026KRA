//Simbologi Titik Sampel
const warnaPersil = {
          type: "simple-fill",
          color:[232, 217, 40, 0],
          outline: {
            color: [7, 0, 11, 0.5],
            width: "0.5px",
            style: "solid"
          }};

const simbolPersil={simbol_Persil:{
          type: "simple",
          title:"Batas Bidang Tanah",
          symbol: warnaPersil
        }};        
        
function ambilSimbolPersil(name) {
    if (simbolPersil[name]) {
        console.log(`🪟 Simbol Persil "${name}" diambil`);
        return simbolPersil[name];
    } else {
        console.warn(`⚠️ Simbol Persil "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.simbolPersil = simbolPersil;
window.ambilSimbolPersil = ambilSimbolPersil;

console.log("📁 PersilSimbol.js berhasil di-load");