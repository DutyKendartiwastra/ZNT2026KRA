//Label Zona
const popupZona = {popup_Zona:{
    title :"Nilai {RPBULAT}",
}};

function ambilPopupZona(name) {
    if (popupZona[name]) {
        console.log(`🪟 Popup Zona "${name}" diambil`);
        return popupZona[name];
    } else {
        console.warn(`⚠️ Popup Zona "${name}" tidak ditemukan!`);
        return null;
    }
}

// Export ke window
window.popupZona = popupZona;
window.ambilPopupZona = ambilPopupZona;

console.log("📁 ZonaPopup.js berhasil di-load");