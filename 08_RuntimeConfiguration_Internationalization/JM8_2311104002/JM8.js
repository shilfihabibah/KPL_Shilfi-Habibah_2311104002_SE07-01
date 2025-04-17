import fs from "fs";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

class BankTransferConfig {
  constructor(config) {
    this.lang = config.lang || "en";
    this.threshold = config.transfer?.threshold || 25000000;
    this.low_fee = config.transfer?.low_fee || 6500;
    this.high_fee = config.transfer?.high_fee || 15000;
    this.methods = config.methods || [
      "RTO (real-time)",
      "SKN",
      "RTGS",
      "BI FAST",
    ];
    this.confirmation = config.confirmation || { en: "yes", id: "ya" };
  }

  static loadConfig(path) {
    if (fs.existsSync(path)) {
      const raw = fs.readFileSync(path);
      const json = JSON.parse(raw);
      return new BankTransferConfig(json);
    } else {
      // default config if file not found
      return new BankTransferConfig({});
    }
  }
}

async function main() {
  const config = BankTransferConfig.loadConfig("bank_transfer_config.json");
  const rl = readline.createInterface({ input, output });

  const promptLang =
    config.lang === "en"
      ? "Please insert the amount of money to transfer:"
      : "Masukkan jumlah uang yang akan di-transfer:";

  const inputAmount = await rl.question(`${promptLang} `);
  const amount = parseInt(inputAmount);

  const fee = amount <= config.threshold ? config.low_fee : config.high_fee;
  const total = amount + fee;

  if (config.lang === "en") {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
    console.log("Select transfer method:");
  } else {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
    console.log("Pilih metode transfer:");
  }

  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  await rl.question("> ");

  const confirmPrompt =
    config.lang === "en"
      ? `Please type "${config.confirmation.en}" to confirm the transaction: `
      : `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: `;

  const confirmInput = await rl.question(confirmPrompt);

  const isConfirmed =
    (config.lang === "en" && confirmInput === config.confirmation.en) ||
    (config.lang === "id" && confirmInput === config.confirmation.id);

  if (isConfirmed) {
    console.log(
      config.lang === "en"
        ? "The transfer is completed"
        : "Proses transfer berhasil"
    );
  } else {
    console.log(
      config.lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan"
    );
  }

  rl.close();
}

main();