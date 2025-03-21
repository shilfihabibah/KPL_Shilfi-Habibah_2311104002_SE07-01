const crypto = require('crypto');

class SayaTubeVideo {
    constructor(title) {
        this.id = crypto.randomInt(10000, 99999); // Generate random 5-digit ID
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count > 0) {
            this.playCount += count;
        }
    }

    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}