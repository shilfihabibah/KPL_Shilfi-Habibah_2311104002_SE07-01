// Output
// Siapa nama kamu?
// Jurusan kamu?
//Universitas kamu?
// Umur kamu?

import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama kamu?", (nama) =>{
    input.question("Jurusan kamu?", (jurusan) =>{
        input.question('Universitas kamu? ', (universitas) => {
            input.question('Umur kamu? ', (umur) => {
                console.log(`\n--- Data Kamu ---`);
                console.log(`Nama: ${nama}`);
                console.log(`Jurusan: ${jurusan}`);
                console.log(`Universitas: ${universitas}`);
                console.log(`Umur: ${umur} tahun`);
                input.close();
            });
        });
    });
});

