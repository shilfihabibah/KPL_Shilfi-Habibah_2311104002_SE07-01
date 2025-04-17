import fs from "fs";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

class CovidConfig {
  constructor(config) {
    this.satuan_suhu = config.satuan_suhu || "celcius";
    this.batas_hari_deman = config.batas_hari_deman || 14;
    this.pesan_ditolak =
      config.pesan_ditolak ||
      "Anda tidak diperbolehkan masuk ke dalam gedung ini";
    this.pesan_diterima =
      config.pesan_diterima ||
      "Anda dipersilahkan untuk masuk ke dalam gedung ini";
  }

  static loadConfig(path) {
    if (fs.existsSync(path)) {
      const raw = fs.readFileSync(path);
      const json = JSON.parse(raw);
      return new CovidConfig(json);
    } else {
      return new CovidConfig({});
    }
  }

  UbahSatuan() {
    this.satuan_suhu = this.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
  }
}

async function main() {
  const config = CovidConfig.loadConfig("covid_config.json");

 
  config.UbahSatuan();

  const rl = readline.createInterface({ input, output });

  const suhuInput = await rl.question(
    `Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `
  );
  const suhu = parseFloat(suhuInput);

  const hariInput = await rl.question(
    "Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? "
  );
  const hariDemam = parseInt(hariInput);

  let suhuNormal = false;

  if (config.satuan_suhu === "celcius") {
    suhuNormal = suhu >= 36.5 && suhu <= 37.5;
  } else if (config.satuan_suhu === "fahrenheit") {
    suhuNormal = suhu >= 97.7 && suhu <= 99.5;
  }

  if (suhuNormal && hariDemam < config.batas_hari_deman) {
    console.log(config.pesan_diterima);
  } else {
    console.log(config.pesan_ditolak);
  }

  rl.close();
}

main();