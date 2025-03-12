class DoorMachine {
    constructor() {
        this.state = "Terkunci"; // State awal
        console.log("Pintu terkunci");
    }

    bukaPintu() {
        if (this.state === "Terkunci") {
            console.log("Tidak bisa membuka, pintu terkunci!");
        } else {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        }
    }

    kunciPintu() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        } else {
            console.log("Pintu sudah terkunci!");
        }
    }
}

module.exports = DoorMachine;

