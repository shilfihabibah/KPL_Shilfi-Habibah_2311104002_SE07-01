class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri"; // State awal
    }

    tekanTombol(tombol) {
        switch (this.state) {
            case "Berdiri":
                if (tombol === "S") {
                    this.state = "Jongkok";
                } else if (tombol === "W") {
                    this.state = "Terbang";
                    console.log("Posisi take off");
                }
                break;
            case "Jongkok":
                if (tombol === "S") {
                    this.state = "Tengkurap";
                } else if (tombol === "W") {
                    this.state = "Berdiri";
                }
                break;
            case "Tengkurap":
                if (tombol === "W") {
                    this.state = "Jongkok";
                }
                break;
            case "Terbang":
                if (tombol === "S") {
                    this.state = "Jongkok";
                    console.log("Posisi landing");
                }
                break;
        }
        console.log("Posisi saat ini:", this.state);
    }
}

// Export class agar bisa digunakan di file lain
module.exports = { PosisiKarakterGame };
