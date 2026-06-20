// js/layer.js

function initializeLayers(map) {
    console.log("🚀 initializeLayers dipanggil dari layer.js");

    // Cek apakah fungsi GeoJSONLayer sudah tersedia
    if (typeof window.createGeoJSONLayer !== "function") {
        console.error("❌ createGeoJSONLayer masih belum tersedia di window!");
        return;
    }

    //menarik fungsi dari window ke lokal JS
    const GeoJSONLayer = window.createGeoJSONLayer;
    console.log("✅ GeoJSONLayer ditemukan, mulai membuat layer...");

    //Batas Kecamatan
    const Kecamatan=new GeoJSONLayer({
        url:"https://raw.githubusercontent.com/DutyKendartiwastra/PTP-KRA/main/Batas_kecamatan.geojson",
        title:"Batas Kecamatan",
        renderer:window.ambilSimbolKecamatan("simbol_Kecamatan"),
        labelingInfo:window.ambilLabelKecamatan("label_Kecamatan"),
        visible:true,
    });

    //Batas Kelurahan
    const Kelurahan= new GeoJSONLayer({
        url:"https://raw.githubusercontent.com/DutyKendartiwastra/PTP-KRA/main/Batas_kelurahan.geojson",
        title:"Batas Desa/Kelurahan",
        renderer:window.ambilSimbolKelurahan("simbol_Kelurahan"),
        labelingInfo:window.ambilLabelKelurahan("label_Kelurahan"),
        visible:true,
        minScale: 50000,
        maxScale: 0
    });

    // Zona Karanganyar 2024
    const Zona = new GeoJSONLayer({
        url: "https://kmizofukvrgnmfbfgwsv.supabase.co/storage/v1/object/sign/ZNT2026/Zona20241.geojson?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZjFlMTc1Zi1iNzdhLTQ3YjEtOTRjYS03NzhiMmQyYTA4NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaTlQyMDI2L1pvbmEyMDI0MS5nZW9qc29uIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTg5Mzk2OSwiZXhwIjoxNzgxOTgwMzY5fQ.-au5VTRE90slTTBVgsJJHXhrVxmIAChC-9wtgdslgpg",
        title: "Zona 2024",
        visible: true,
        renderer:window.ambilSimbolZona("simbol_Zona"),
        labelingInfo:window.ambilLabelZona("label_Zona"),
        //popupTemplate:window.ambilPopupZona("popup_Zona"),
    });
    // Sample 2023
    const Sampel = new GeoJSONLayer({
        url: "https://kmizofukvrgnmfbfgwsv.supabase.co/storage/v1/object/sign/ZNT2026/test_sampel.geojson?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZjFlMTc1Zi1iNzdhLTQ3YjEtOTRjYS03NzhiMmQyYTA4NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaTlQyMDI2L3Rlc3Rfc2FtcGVsLmdlb2pzb24iLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxODkxMTIyLCJleHAiOjE3ODE5Nzc1MjJ9.9NAXc1vkQZ8Ua9O4ucDBEvdAlVV7as8p5HRE3EY5av8",
        //title: "Sample 2023",
        //visible: true,
        //minScale: 10000,
        //maxScale: 1,
        //popupTemplate: window.ambilPopupSampel("popup_Sampel"),
        //renderer:window.ambilSimbolSampel("simbol_Sampel"),
    });
    // Persil Sebontang
    const Persil = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/DutyKendartiwastra/ZNT2023/main/Persil%20Sebontang%20Update.geojson",
        title: "Persil Sebontang",
        visible: false,
        renderer:window.ambilSimbolPersil("simbol_Persil")
    });

    map.addMany([Persil,Zona,Kelurahan,Kecamatan,Sampel]);

    //Ditarik ke window lagi
    window.KecamatanLayer=Kecamatan;
    window.ZonaLayer = Zona;
    window.SampelLayer = Sampel;
    window.PersilLayer = Persil;

    console.log("✅ Semua layer berhasil diinisialisasi");
}

window.initializeLayers = initializeLayers;