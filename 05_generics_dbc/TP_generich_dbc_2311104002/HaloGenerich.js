class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const myData = new DataGeneric("2311104002"); // Gantilah dengan NIM praktikan
myData.PrintData();
