const { getKodeBuah } = require("./KodeBuah");
const { PosisiKarakterGame } = require("./PosisiKarakterGame");

// Cek fungsi getKodeBuah
console.log("Kode Buah Alpukat:", getKodeBuah("Alpukat"));
console.log("Kode Buah Melon:", getKodeBuah("Melon"));

// Cek class PosisiKarakterGame
const karakter = new PosisiKarakterGame();
karakter.tekanTombol("S"); // Jongkok
karakter.tekanTombol("S"); // Tengkurap
karakter.tekanTombol("W"); // Kembali ke Jongkok
karakter.tekanTombol("W"); // Kembali ke Berdiri
karakter.tekanTombol("W"); // Terbang (harus ada output "Posisi take off")
karakter.tekanTombol("S"); // Kembali ke Jongkok (harus ada output "Posisi landing")
    