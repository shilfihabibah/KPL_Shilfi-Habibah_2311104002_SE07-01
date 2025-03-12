const kodeBuahMap = {
    Apel: "A00",
    Aprikot: "B00",
    Alpukat: "C00",
    Pisang: "D00",
    Paprika: "E00",
    Kurma: "K00",
    Durian: "L00",
    Anggur: "M00",
    Melon: "N00",
    Semangka: "O00"
};

function getKodeBuah(namaBuah) {
    return kodeBuahMap[namaBuah] || "Kode tidak ditemukan";
}

// Export function agar bisa digunakan di file lain
module.exports = { getKodeBuah };

