const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jumlahBarang = 0;
let hargaBarang = [];

// Fungsi untuk menentukan kategori diskon
function getKategoriDiskon(total) {
    if (total > 100000) {
        return 'Diskon Besar';
    } else if (total >= 50000) {
        return 'Diskon Sedang';
    } else {
        return 'Tidak Ada Diskon';
    }
}

// Input jumlah barang
rl.question('Masukkan jumlah barang: ', (inputJumlah) => {
    jumlahBarang = parseInt(inputJumlah);
    let index = 0;

    // Fungsi untuk input harga barang
    const inputHarga = () => {
        if (index < jumlahBarang) {
            rl.question(`Masukkan harga barang ke-${index + 1}: `, (harga) => {
                hargaBarang.push(parseInt(harga));
                index++;
                inputHarga();
            });
        } else {
            // Menghitung total harga
            const totalHarga = hargaBarang.reduce((acc, val) => acc + val, 0);
            const kategoriDiskon = getKategoriDiskon(totalHarga);

            // Menampilkan hasil
            console.log(`\nTotal harga: ${totalHarga}`);
            console.log(`Jumlah barang: ${jumlahBarang}`);
            console.log(`Kategori Diskon: ${kategoriDiskon}`);

            // Menampilkan informasi tambahan untuk setiap barang
            hargaBarang.forEach((_, i) => {
                console.log(`Informasi tambahan untuk barang ke-${i + 1}`);
            });

            rl.close();
        }
    };

    inputHarga();
});
