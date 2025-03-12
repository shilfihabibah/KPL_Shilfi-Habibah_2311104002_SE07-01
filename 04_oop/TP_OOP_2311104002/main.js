const KodePos = require('./kodePos');
const DoorMachine = require('./doorMachine');

console.log("\n=== [Table-Driven: Kode Pos] ===");
const kodePos = new KodePos();
console.log("Kode Pos Batununggal:", kodePos.getKodePos("Batununggal"));
console.log("Kode Pos Cijaura:", kodePos.getKodePos("Cijaura"));
console.log("Kode Pos Maleer:", kodePos.getKodePos("Maleer"));
console.log("Kode Pos Tidak Ada:", kodePos.getKodePos("KelurahanFiktif"));

console.log("\n=== [Automata-Based: Door Machine] ===");
const door = new DoorMachine();
console.log("\nMencoba membuka pintu...");
door.bukaPintu();

console.log("\nMengubah state pintu ke terbuka...");
door.state = "Terbuka"; // Simulasi perubahan state manual
console.log("Pintu tidak terkunci");

console.log("\nMencoba membuka pintu...");
door.bukaPintu();

console.log("\nMengunci pintu kembali...");
door.kunciPintu();
