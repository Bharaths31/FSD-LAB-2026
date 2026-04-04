const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

const MONGO_URI = 'mongodb+srv://dark93531_db_user:dark2005@cluster0.hdfk2tp.mongodb.net/training_institute_db';

// Trainee Schema
const traineeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    courseRegistered: { type: String, required: true },
    hasCSEBackground: { type: Boolean, default: false }
});

const Trainee = mongoose.model('Trainee', traineeSchema);

// POST /api/trainees - Create a new trainee
app.post('/api/trainees', async (req, res) => {
    try {
        const trainee = new Trainee(req.body);
        const saved = await trainee.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /api/trainees - Get all trainees
app.get('/api/trainees', async (req, res) => {
    try {
        const trainees = await Trainee.find();
        res.json(trainees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/trainees/course/:courseName - Filter trainees by course
app.get('/api/trainees/course/:courseName', async (req, res) => {
    try {
        const courseName = req.params.courseName;
        const trainees = await Trainee.find({ courseRegistered: courseName });
        res.json(trainees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas - training_institute_db');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
            console.log('Filter by course: GET /api/trainees/course/:courseName');
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });
