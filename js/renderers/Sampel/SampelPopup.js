//Pop Up Titik Sampel
      const popupSampel ={popup_Sampel:{
        title :"Nomor Entri {No Marking GPS}",
        content:
              [{
                type: "fields",
                fieldInfos: [
                  //{
                  //  fieldName: "Foto",
                  //  label: "Foto",
                  //  format:"<img src='{Foto}'>",
                  //},
                  {
                    fieldName: "Nama Surveyor",
                    label: "Nama Surveyor"
                  },
                  {
                    fieldName: "Tanggal Pelaksanaan",
                    label: "Tanggal Pelaksanaan"
                  },
                  {
                    fieldName: "Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)",
                    label: "Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)"
                  },
                  {
                    fieldName: "Alamat",
                    label: "Alamat"
                  },
                  {
                    fieldName: "Kelurahan / Desa",
                    label: "Kelurahan / Desa"
                  },
                  {
                    fieldName: "Kecamatan",
                    label: "Kecamatan"
                  },
                  {
                    fieldName: "Koordinat X (TM3)",
                    label: "Koordinat X (TM3)"
                  },
                  {
                    fieldName: "Koordinat Y (TM3)",
                    label: "Koordinat Y (TM3)"
                  },
                  {
                    fieldName: "Status Kepemilikan",
                    label: "Status Kepemilikan"
                  },
                  {
                    fieldName: "Jenis Data",
                    label: "Jenis Data"
                  },
                  {
                    fieldName: "Tanggal Penawaran/ Transaksi",
                    label: "Tanggal Penawaran/ Transaksi"
                  },
                  {
                    fieldName: "Harga Penawaran/ Transaksi (Rp.)           ",
                    label: "Harga Penawaran/ Transaksi (Rp.)           ",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Luas tanah (m2)",
                    label: "Luas tanah (m2)",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Lebar Depan (m)",
                    label: "Lebar Depan (m)"
                  },
                  {
                    fieldName: "Panjang Kebelakang (m)",
                    label: "Panjang Kebelakang (m)"
                  },
                  {
                    fieldName: "Bentuk Tanah",
                    label: "Bentuk Tanah"
                  },
                  {
                    fieldName: "Elevasi dari Jalan",
                    label: "Elevasi dari Jalan"
                  },
                  {
                    fieldName: "Letak Tanah",
                    label: "Letak Tanah"
                  },
                  {
                    fieldName: "Kelas Jalan",
                    label: "Kelas Jalan"
                  },
                  {
                    fieldName: "Lebar Jalan",
                    label: "Lebar Jalan"
                  },
                  {
                    fieldName: "Aksesibilitas",
                    label: "Aksesibilitas"
                  },
                  {
                    fieldName: "Drainase",
                    label: "Drainase"
                  },
                  {
                    fieldName: "Utilitas",
                    label: "Utilitas"
                  },
                  {
                    fieldName: "Fasilitas",
                    label: "Fasilitas"
                  },
                  {
                    fieldName: "Zoning/ Peruntukan",
                    label: "Zoning/ Peruntukan"
                  },
                  {
                    fieldName: "Luas Bangunan",
                    label: "Luas Bangunan",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Jenis",
                    label: "Jenis"
                  },
                  {
                    fieldName: "Jumlah Lantai",
                    label: "Jumlah Lantai"
                  },
                  {
                    fieldName: "Tahun Pembuatan",
                    label: "Tahun Pembuatan"
                  },
                  {
                    fieldName: "Tahun Renovasi",
                    label: "Tahun Renovasi"
                  },
                  {
                    fieldName: "Konstruksi Atas",
                    label: "Konstruksi Atas"
                  },
                  {
                    fieldName: "Konstruksi Bawah",
                    label: "Konstruksi Bawah"
                  },
                  {
                    fieldName: "Atap",
                    label: "Atap"
                  },
                  {
                    fieldName: "Dinding",
                    label: "Dinding"
                  },
                  {
                    fieldName: "LangitLangit",
                    label: "Langit-Langit"
                  },
                  {
                    fieldName: "Lantai",
                    label: "Lantai"
                  },
                  {
                    fieldName: "Pagar",
                    label: "Pagar"
                  },
                  {
                    fieldName: "Panjang Pagar",
                    label: "Panjang Pagar"
                  },
                  {
                    fieldName: "Luas Carport",
                    label: "Luas Carport"
                  },
                  {
                    fieldName: "Pintu/Jendela",
                    label: "Pintu/Jendela"
                  },
                  {
                    fieldName: "Jumlah Fasilitas",
                    label: "Jumlah Fasilitas"
                  },
                  {
                    fieldName: "Keadaan Fisik Umumnya",
                    label: "Keadaan Fisik Umumnya"
                  },
                  {
                    fieldName: "Biaya Per m2 bangunan",
                    label: "Biaya Per m2 bangunan",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "RCN (Biaya Pembuatan Bangunan Baru)",
                    label: "RCN (Biaya Pembuatan Bangunan Baru)",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Tahun Penilaian",
                    label: "Tahun Penilaian"
                  },
                  {
                    fieldName: "Umur Efektif",
                    label: "Umur Efektif"
                  },
                  {
                    fieldName: "Penyusutan",
                    label: "Penyusutan",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Nilai Bangunan",
                    label: "Nilai Bangunan",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Harga Penyesuaian Penawaran (Rp.)",
                    label: "Harga Penyesuaian Penawaran (Rp.)",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Nilai Bangunan (Rp.)",
                    label: "Nilai Bangunan (Rp.)",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Harga Tanah (Rp.)",
                    label: "Harga Tanah (Rp.)",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "Penyesuaian Waktu",
                    label: "Penyesuaian Waktu",
                    format:{
                      digitSeparator:true,
                      places:2
                    }
                  },
                  {
                    fieldName: "Penyesuaian Status Kepemilikan",
                    label: "Penyesuaian Status Kepemilikan",
                    format:{
                      digitSeparator:true,
                      places:2
                    }
                  },
                  {
                    fieldName: "nilluas",
                    label: "Nilai Keseluruhan (Rp.)",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                  {
                    fieldName: "join - Copy — Sheet1_nilai",
                    label: "Nilai Tanah (Rp.)",
                    format:{
                      digitSeparator:true,
                      places:0
                    }
                  },
                ]
              },
              //{
              //  type:"media",
              //  mediaInfos:[{
              //    title:"Foto Lokasi",
              //    type: "image",
              //    value:{
              //      sourceURL:"{Foto}"
              //    }
              //  }]
              //},
            ]}
      };

// -------------------------------------------------- Helper function
//ambilPopupSampel => adalah nama fungsi yang kita definisikan sendiri (boleh diubah)
//popupSampel => adalah parameter cons di atas yang telah kita definisikan
//popup_Sampel key yang akan kita panggil di Layers.js

function ambilPopupSampel(name) {
    if (popupSampel[name]) {
        console.log(`🪟 Popup Sampel "${name}" diambil`);
        return popupSampel[name];
    } else {
        console.warn(`⚠️ Popup Sampel "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.popupSampel = popupSampel;
window.ambilPopupSampel = ambilPopupSampel;

console.log("📁 SampelPopup.js berhasil di-load");