
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!`);

    let arr = Array.from({ length: 50 }, (_, i) => i);
    arr.forEach(i => {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(`${i} #$#$`);
        } else if (i % 2 === 0) {
            console.log(`${i} ##`);
        } else if (i % 3 === 0) {
            console.log(`${i} $$`);
        } else {
            console.log(`${i}`);
        }
    });

    rl.question("Masukkan sebuah angka (1-10000): ", (nilaiString) => {
        let nilaiInt = parseInt(nilaiString, 10);
        
        if (isPrime(nilaiInt)) {
            console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
        } else {
            console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
        }
        rl.close();
    });
});

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
