const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Custom request logger middleware
function requestLogger(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
}

// Apply middleware globally
app.use(requestLogger);

// Sample routes for testing the logger
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running smoothly' });
});

// In-memory scan data
let scans = [];
let nextId = 1;

app.post('/api/scans', (req, res) => {
    const { patientName, scanType, date } = req.body;
    const scan = { id: nextId++, patientName, scanType, date };
    scans.push(scan);
    res.status(201).json(scan);
});

app.get('/api/scans', (req, res) => {
    res.json(scans);
});

app.listen(PORT, () => {
    console.log(`Server with Request Logger running on http://localhost:${PORT}`);
    console.log('All incoming requests will be logged to console.');
});
