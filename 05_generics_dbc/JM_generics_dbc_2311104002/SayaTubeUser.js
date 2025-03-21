class SayaTubeUser {
    constructor(username) {
        this.id = crypto.randomInt(10000, 99999); // Generate random 5-digit ID
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

const user = new SayaTubeUser("Nama Praktikan");

const movies = [
    "Review Film Interstellar oleh Nama Praktikan",
    "Review Film Inception oleh Nama Praktikan",
    "Review Film The Dark Knight oleh Nama Praktikan",
    "Review Film Parasite oleh Nama Praktikan",
    "Review Film Avengers: Endgame oleh Nama Praktikan",
    "Review Film The Matrix oleh Nama Praktikan",
    "Review Film Whiplash oleh Nama Praktikan",
    "Review Film Joker oleh Nama Praktikan",
    "Review Film The Shawshank Redemption oleh Nama Praktikan",
    "Review Film Fight Club oleh Nama Praktikan"
];

movies.forEach(movie => {
    const video = new SayaTubeVideo(movie);
    video.increasePlayCount(100);
    user.addVideo(video);
});

user.printAllVideoPlaycount();
