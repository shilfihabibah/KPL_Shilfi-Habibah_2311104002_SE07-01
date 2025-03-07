const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { output: "" });
});

app.post("/submit", (req, res) => {
    const inputText = req.body.inputText;
    const outputText = `Halo ${inputText}`;
    res.render("index", { output: outputText });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
