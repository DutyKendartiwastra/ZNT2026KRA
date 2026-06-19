//Simbologi Titik Sampel
      const simbolSampel ={simbol_Sampel:{
      type: "simple",
        symbol: {
        type: "simple-marker",
        style: "circle",           // bentuk bulat
        color: [59, 130, 246, 0.9], // biru dengan transparansi
        size: 12,                  // ukuran
        outline: { 
            color: "white", 
            width: 2
        }}
      }};

// -------------------------------------------------- Helper function
//ambilSimbolSampel => adalah nama fungsi yang kita definisikan sendiri (boleh diubah)
//simbolSampel => adalah parameter cons di atas yang telah kita definisikan
//simbol_Sampel key yang akan kita panggil di Layers.js

function ambilSimbolSampel(name) {
    if (simbolSampel[name]) {
        console.log(`🪟 Simbol Sampel "${name}" diambil`);
        return simbolSampel[name];
    } else {
        console.warn(`⚠️ Simbol Sampel "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.simbolSampel = simbolSampel;
window.ambilSimbolSampel = ambilSimbolSampel;

console.log("📁 SampelSimbol.js berhasil di-load");