class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 100 karakter.");
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000); // ID 5 digit acak
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Penambahan play count maksimal 10.000.000 per panggilan.");
        }

        try {
            let newPlayCount = this.playCount + count;
            if (newPlayCount > Number.MAX_SAFE_INTEGER) {
                throw new Error("Terjadi overflow play count!");
            }
            this.playCount = newPlayCount;
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    PrintVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// Main Function
try {
    let video = new SayaTubeVideo("Tutorial Design By Contract – Shilfi_PraktiKan");
    video.PrintVideoDetails();

    // Uji precondition dan exception handling
    for (let i = 0; i < 10; i++) {
        video.IncreasePlayCount(10000000); // Menambah play count secara iteratif
    }
    
    video.PrintVideoDetails();
} catch (error) {
    console.error("Error saat membuat video:", error.message);
}
