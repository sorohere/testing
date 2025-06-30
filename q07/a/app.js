const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/page1", (req, res) => {
    res.sendFile(path.join(__dirname, "page1.html"));
});

app.get("/page2", (req, res) => {
    res.sendFile(path.join(__dirname, "page2.html"));
});

app.get("/page3", (req, res) => {
    res.sendFile(path.join(__dirname, "page3.html"));
});

app.listen(port, ()=> {
    console.log("running on localhost:8080");
});