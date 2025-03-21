const SayaTubeVideo = require("./SayaTubeVideo");

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); // Generate random 5-digit ID
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Video yang ditambahkan harus berupa instance dari SayaTubeVideo.");
        }
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count video melebihi batas maksimum integer.");
        }

        this.uploadedVideos.push(video);
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

module.exports = SayaTubeUser;
