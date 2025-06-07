const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the project's root directory
app.use(express.static(__dirname));

// Define routes for each page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

app.get('/announcements', (req, res) => {
    res.sendFile(path.join(__dirname, 'announcements.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 