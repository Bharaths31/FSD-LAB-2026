const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// MongoDB Atlas connection
const MONGO_URI = 'mongodb+srv://dark93531_db_user:dark2005@cluster0.hdfk2tp.mongodb.net/patient_scans_db';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB Atlas - patient_scans_db');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });

app.get('/', (req, res) => {
    res.json({ message: 'Connected to MongoDB Atlas - patient_scans_db' });
});
