const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan satu huruf: ", (huruf) => {
    huruf = huruf.toUpperCase(); 
    const vokal = ["A", "I", "U", "E", "O"];
    
    if (vokal.includes(huruf)) {
        console.log(`Huruf ${huruf} merupakan huruf vokal`);
    } else {
        console.log(`Huruf ${huruf} merupakan huruf konsonan`);
    }

    let bilanganGenap = [2, 4, 6, 8, 10];
    bilanganGenap.forEach((angka, index) => {
        console.log(`Angka genap ${index + 1} : ${angka}`);
    });
    
    rl.close();
});
