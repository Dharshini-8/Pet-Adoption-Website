const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Here you would validate the username and password
    // For simplicity, let's assume username and password are both "admin"
    if (username === 'admin' && password === 'admin') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Endpoint to handle pet data retrieval
app.get('/pets', (req, res) => {
    // Read pet data from a JSON file
    fs.readFile('pets.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading pet data:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        // Parse JSON data
        const pets = JSON.parse(data);
        res.json({ success: true, pets });
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
