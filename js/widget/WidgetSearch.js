//Search
function initializeSearch(view) {
    console.log("🚀 initializeSearch dipanggil dari WidgetDefault.js");

    if (typeof window.createSearch !== "function") {
        console.error("❌ Search widget masih belum tersedia di window!");
        return;
    }

    try {
        const search1=window.KecamatanLayer;
        const search2=window.KelurahanLayer;
        const Search= window.createSearch;

        const pencarian = new Search({
          view: view,
          allPlaceholder: "Cari Berdasarkan",
          includeDefaultSources: false,
          sources: [
            {
              layer:search1,
              searchFields: ["KEC"],
              displayField: "KEC",
              exactMatch: false,
              outFields: ["KEC"],
              name: "KECAMATAN",
              zoomScale: 50000,
              placeholder: "Contoh: JUMANTONO"
            },
            {
              layer:search2,
              searchFields: ["DESA"],
              displayField: "DESA",
              exactMatch: false,
              outFields: ["DESA"],
              name: "DESA",
              zoomScale: 10000,
              placeholder: "Contoh: NGIJO"
            }]
        });

        view.ui.add(pencarian, {position: "top-right"});

        window.SearchWidget = pencarian;

        console.log("✅ Layer List berhasil ditambahkan");
        return pencarian;

    } catch (error) {
        console.error("❌ Error saat membuat search widget:", error);
    }
}

window.initializeSearch = initializeSearch;