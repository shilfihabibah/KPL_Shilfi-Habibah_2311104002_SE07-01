// main.js
// Menjalankan program utama untuk mengetes inheritance, encapsulation dan polymorphism

import { Manager } from './Manager.js';

try {
  const manager1 = new Manager("Budi", 40, "Project Manager", 10000000, 2500000);
  console.log(manager1.introduce()); // Output dengan total salary
} catch (error) {
  console.error(error.message);
}