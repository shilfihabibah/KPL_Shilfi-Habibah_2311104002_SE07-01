class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 200 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); // Generate random 5-digit ID
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== "number" || count < 0 || count > 25000000) {
            throw new Error("Play count harus berupa bilangan positif dan maksimal 25.000.000.");
        }

        // Cek integer overflow
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Jumlah play count melebihi batas maksimum integer.");
        }

        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Jumlah Play: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;
