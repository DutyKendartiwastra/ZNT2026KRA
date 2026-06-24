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

    //Batas Kabupaten
    const Kabupaten=new GeoJSONLayer({
        url:"https://kmizofukvrgnmfbfgwsv.supabase.co/storage/v1/object/sign/ZNT2026/BatasKabupaten.geojson?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZjFlMTc1Zi1iNzdhLTQ3YjEtOTRjYS03NzhiMmQyYTA4NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaTlQyMDI2L0JhdGFzS2FidXBhdGVuLmdlb2pzb24iLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyMTk5OTI5LCJleHAiOjE4MTM3MzU5Mjl9.gNa44oJ5BNXDVYdvKXRKo77LydNwEVyODlNogzu_RNM",
        title:"Batas Kabupaten",
        renderer:window.ambilSimbolKabupaten("simbol_Kabupaten"),
        //labelingInfo:window.ambilLabelKecamatan("label_Kecamatan"),
        //visible:true,
    });

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
        url: "https://kmizofukvrgnmfbfgwsv.supabase.co/storage/v1/object/sign/ZNT2026/Zona20241.geojson?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZjFlMTc1Zi1iNzdhLTQ3YjEtOTRjYS03NzhiMmQyYTA4NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaTlQyMDI2L1pvbmEyMDI0MS5nZW9qc29uIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTk4MDYwNCwiZXhwIjoxNzgzMTkwMjA0fQ.WHZOOHuNV1ZSIRRntt6ZJfS5P-wtLYn7teA4cvbMn8A",
        title: "Zona 2024",
        visible: false,
        renderer:window.ambilSimbolZona("simbol_Zona"),
        labelingInfo:window.ambilLabelZona("label_Zona"),
        //popupTemplate:window.ambilPopupZona("popup_Zona"),
    });

    // Zona Karanganyar 2026
    const Zona2026 = new GeoJSONLayer({
        url: "https://kmizofukvrgnmfbfgwsv.supabase.co/storage/v1/object/sign/ZNT2026/Zona2026.geojson?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZjFlMTc1Zi1iNzdhLTQ3YjEtOTRjYS03NzhiMmQyYTA4NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaTlQyMDI2L1pvbmEyMDI2Lmdlb2pzb24iLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyMjAwOTA0LCJleHAiOjE3ODI4MDU3MDR9.Cwj1WzKdoneVVQJzvB3Xi9IUQWDXoA4EPaqyYkOBJOY",
        title: "Zona 2026",
        visible: true,
        renderer:window.ambilSimbolZona("simbol_Zona"),
        labelingInfo:window.ambilLabelZona("label_Zona"),
        //popupTemplate:window.ambilPopupZona("popup_Zona"),
    });


    // Sample 2026
    const Sampel2026 = new GeoJSONLayer({
        url: "https://kmizofukvrgnmfbfgwsv.supabase.co/storage/v1/object/sign/ZNT2026/TS2026Join.geojson?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZjFlMTc1Zi1iNzdhLTQ3YjEtOTRjYS03NzhiMmQyYTA4NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaTlQyMDI2L1RTMjAyNkpvaW4uZ2VvanNvbiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODIzMzI1NzgsImV4cCI6MTgxMzg2ODU3OH0.HLCQdRJ-UggQaJhoOtGOc4MAWT9sftIXXKeYPj3v968",
        title: "Sample 2026",
        visible: true,
        minScale: 10000,
        maxScale: 1,
        //popupTemplate: window.ambilPopupSampel("popup_Sampel"),
        renderer:window.ambilSimbolSampel("simbol_Sampel"),
    });

    // Persil Lokasi Pembaruan
    const Persil = new GeoJSONLayer({
        url: "https://kmizofukvrgnmfbfgwsv.supabase.co/storage/v1/object/sign/ZNT2026/BatasBidang.geojson?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZjFlMTc1Zi1iNzdhLTQ3YjEtOTRjYS03NzhiMmQyYTA4NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaTlQyMDI2L0JhdGFzQmlkYW5nLmdlb2pzb24iLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyMTk4OTgxLCJleHAiOjE4MTM3MzQ5ODF9.eylUPOdz2Zx1Cj936yK6x2nQFW63ANqNwic16kMylDU",
        title: "Batas Bidang Tanah",
        visible: false,
        renderer:window.ambilSimbolPersil("simbol_Persil"),
        minScale: 50000,
        maxScale: 0
    });

    map.addMany([Zona,Zona2026,Kelurahan,Kecamatan,Kabupaten,Persil,Sampel2026]);

    //Ditarik ke window lagi
    window.KelurahanLayer=Kelurahan;
    window.KecamatanLayer=Kecamatan;
    window.KecamatanLayer=Kabupaten;
    window.ZonaLayer = Zona;
    window.Zona2026Layer = Zona2026;
    window.PersilLayer = Persil;
    window.Sampel2026Layer = Sampel2026;

    console.log("✅ Semua layer berhasil diinisialisasi");
}

window.initializeLayers = initializeLayers;