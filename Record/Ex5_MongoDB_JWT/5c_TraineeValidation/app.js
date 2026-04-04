const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB Atlas connection
const MONGO_URI = 'mongodb+srv://dark93531_db_user:dark2005@cluster0.hdfk2tp.mongodb.net/training_institute_db';

// Trainee Schema with validation
const traineeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    courseRegistered: {
        type: String,
        required: [true, 'Course registration is required']
    },
    hasCSEBackground: {
        type: Boolean,
        default: false
    }
});

const Trainee = mongoose.model('Trainee', traineeSchema);

// POST /api/trainees - Create a new trainee
app.post('/api/trainees', async (req, res) => {
    try {
        const trainee = new Trainee(req.body);
        const savedTrainee = await trainee.save();
        res.status(201).json(savedTrainee);
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({ error: 'Validation failed', details: messages });
        }
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: err.message });
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

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas - training_institute_db');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });
