class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        const nimAkhir = 2; 
        
        if (nimAkhir === 1 || nimAkhir === 2) {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
        } else {
            a = Number(a);
            b = Number(b);
            c = Number(c);
        }
        
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            throw new Error("Semua input harus berupa angka yang valid.");
        }
        
        return a + b + c;
    }
}

const hasil = Penjumlahan.JumlahTigaAngka(23, 11, 10);
console.log("Hasil penjumlahan:", hasil);

