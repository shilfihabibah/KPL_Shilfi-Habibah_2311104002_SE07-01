// Program Node.js untuk menghitung diskon berdasarkan total pembelian
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let items = [];

// Fungsi untuk meminta input jumlah barang
const askItemCount = () => {
    rl.question('Masukkan jumlah barang yang dibeli: ', (itemCount) => {
        const count = parseInt(itemCount);
        if (isNaN(count) || count <= 0) {
            console.log('Masukkan jumlah barang yang valid.');
            askItemCount();
        } else {
            askItemDetails(count);
        }
    });
};

// Fungsi untuk meminta input detail barang
const askItemDetails = (count) => {
    if (count > 0) {
        rl.question('Masukkan nama barang: ', (name) => {
            rl.question('Masukkan harga barang: ', (price) => {
                const itemPrice = parseFloat(price);
                if (isNaN(itemPrice) || itemPrice < 0) {
                    console.log('Masukkan harga barang yang valid.');
                    askItemDetails(count);
                } else {
                    items.push({ name, price: itemPrice });
                    askItemDetails(count - 1);
                }
            });
        });
    } else {
        calculateTotal();
    }
};

// Fungsi untuk menghitung total harga dan menentukan diskon
const calculateTotal = () => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    let discountCategory = 'Tidak Ada Diskon';

    if (total > 100000) {
        discountCategory = 'Diskon Besar';
    } else if (total >= 50000) {
        discountCategory = 'Diskon Sedang';
    }

    console.log('\n=== Rincian Pembelian ===');
    items.forEach((item, index) => {
        console.log(`${index + 1}. Nama: ${item.name}, Harga: Rp${item.price.toFixed(2)}`);
    });
    console.log(`Total Harga: Rp${total.toFixed(2)}`);
    console.log(`Jumlah Barang: ${items.length}`);
    console.log(`Kategori Diskon: ${discountCategory}`);

    rl.close();
};

// Memulai program
askItemCount();
