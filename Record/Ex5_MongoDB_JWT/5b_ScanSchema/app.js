const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB Atlas connection
const MONGO_URI = 'mongodb+srv://dark93531_db_user:dark2005@cluster0.hdfk2tp.mongodb.net/patient_scans_db';

// Define Scan Schema
const scanSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: [true, 'Patient name is required']
    },
    scanType: {
        type: String,
        required: [true, 'Scan type is required (e.g., MRI, CT)']
    },
    scanDate: {
        type: Date,
        default: Date.now
    },
    resultStatus: {
        type: String,
        default: 'Pending'
    }
});

const Scan = mongoose.model('Scan', scanSchema);

// POST route to create a scan
app.post('/api/scans', async (req, res) => {
    try {
        const scan = new Scan(req.body);
        const savedScan = await scan.save();
        res.status(201).json(savedScan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET route to retrieve all scans
app.get('/api/scans', async (req, res) => {
    try {
        const scans = await Scan.find();
        res.json(scans);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas - patient_scans_db');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });
