const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(__dirname));
app.use((req, res, next) => {
    next();
});

let count = 0;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/visits", (req, res) => {
    count++;
    res.send({"visits": count});
});

app.listen(port, () => {
    console.log("listening  at port 8080");
});