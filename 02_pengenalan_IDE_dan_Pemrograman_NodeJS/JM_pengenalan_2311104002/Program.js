
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan satu huruf: ", (huruf) => {
    if (huruf.length !== 1 || !/[A-Za-z]/.test(huruf)) {
        console.log("Input harus berupa satu huruf!");
        rl.close();
        return;
    }
    
    huruf = huruf.toUpperCase(); 
    const vokal = ["A", "I", "U", "E", "O"];
    
    if (vokal.includes(huruf)) {
        console.log(`Huruf ${huruf} merupakan huruf vokal`);
    } else {
        console.log(`Huruf ${huruf} merupakan huruf konsonan`);
    }

    let bilanganGenap = Array.from({ length: 5 }, (_, i) => (i + 1) * 2);
    bilanganGenap.forEach((angka, index) => {
        console.log(`Angka genap ${index + 1} : ${angka}`);
    });
    
    rl.close();
});