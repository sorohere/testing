const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

let visitCount = 0;

app.use((req, res, next) => {
    console.log(`[Logger] Request for: ${req.url}`);
    next();
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/api/visits', (req, res) => {
    visitCount++;
    res.json({ visits: visitCount });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 