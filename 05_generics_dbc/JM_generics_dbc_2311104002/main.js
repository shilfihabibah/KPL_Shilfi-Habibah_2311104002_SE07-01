const SayaTubeUser = require("./SayaTubeUser");
const SayaTubeVideo = require("./SayaTubeVideo");

try {
    let user = new SayaTubeUser("Budi");

    let videoTitles = [
        "Review Film Interstellar oleh Budi",
        "Review Film Inception oleh Budi",
        "Review Film The Dark Knight oleh Budi",
        "Review Film Parasite oleh Budi",
        "Review Film Whiplash oleh Budi",
        "Review Film Joker oleh Budi",
        "Review Film Tenet oleh Budi",
        "Review Film The Prestige oleh Budi",
        "Review Film The Godfather oleh Budi",
        "Review Film The Shawshank Redemption oleh Budi"
    ];

    let videos = videoTitles.map(title => new SayaTubeVideo(title));

    videos.forEach(video => user.AddVideo(video));

    // Menambahkan play count secara bertahap untuk menguji exception
    try {
        videos[0].IncreasePlayCount(25000000); // Maksimal yang diizinkan
        videos[1].IncreasePlayCount(50000000); // Melebihi batas
    } catch (error) {
        console.error("Error saat menambahkan play count:", error.message);
    }

    console.log("\n=== DETAIL SEMUA VIDEO ===");
    videos.forEach(video => video.PrintVideoDetails());

    console.log("\n=== TOTAL PLAY COUNT ===");
    console.log(`Total Play Count Semua Video: ${user.GetTotalVideoPlayCount()}`);

    console.log("\n=== PRINT VIDEO DARI USER ===");
    user.PrintAllVideoPlaycount();

} catch (error) {
    console.error("Terjadi kesalahan:", error.message);
}
