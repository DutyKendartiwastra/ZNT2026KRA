//Simbologi 8 Kelas
const Kelas1={
        type: "simple-fill",
          color: [56, 168, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };
const Kelas2={
        type: "simple-fill",
          color: [102, 191, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };      
const Kelas3={
        type: "simple-fill",
          color: [155, 217, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };      
const Kelas4={
        type: "simple-fill",
          color: [222, 242, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };      
const Kelas5={
        type: "simple-fill",
          color: [255, 221, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };      
const Kelas6={
        type: "simple-fill",
          color: [255, 145, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };
const Kelas7={
        type: "simple-fill",
          color: [255, 72, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };
const Kelas8={
        type: "simple-fill",
          color: [255, 0, 80, 0.8],
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 1]
          }
      };              

//Simbologi Zona
const simbolZona={simbol_Zona:{
    type: "class-breaks",
          field: "MEAN",
          legendOptions: {
            title: "Nilai Tanah"},
          classBreakInfos: [
            {
              minValue: 0,
              maxValue: 153189,
              symbol: Kelas1,
              label: "Rp.535.800 - dst."
            },
            {
              minValue: 0,
              maxValue: 227569,
              symbol: Kelas2,
              label: "Rp.689.900 - 802.400"
            },
            {
              minValue: 227569,
              maxValue: 302068,
              symbol: Kelas3,
              label: "Rp.802.500 - 888.600"
            },
            {
              minValue: 302068,
              maxValue: 407925,
              symbol: Kelas4,
              label: "Rp.888.600 - dst"
            },
            {
              minValue: 407925,
              maxValue: 589734,
              symbol: Kelas5,
              label: "Kelas5"
            },
            {
              minValue: 589734,
              maxValue: 1085913,
              symbol: Kelas6,
              label: "Kelas6"
            },
            {
              minValue: 1085913,
              maxValue: 2087101,
              symbol: Kelas7,
              label: "Kelas7"
            },
            {
              minValue: 2087101,
              maxValue: 13721078,
              symbol: Kelas8,
              label: "Kelas8"
            },
          ]
}};

function ambilSimbolZona(name) {
    if (simbolZona[name]) {
        console.log(`🪟 Simbol Zona "${name}" diambil`);
        return simbolZona[name];
    } else {
        console.warn(`⚠️ Simbol Zona "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.simbolZona = simbolZona;
window.ambilSimbolZona = ambilSimbolZona;

console.log("📁 ZonaSimbol.js berhasil di-load");