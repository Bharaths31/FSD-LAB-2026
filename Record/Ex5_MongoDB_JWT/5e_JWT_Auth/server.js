const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const MONGO_URI = 'mongodb+srv://dark93531_db_user:dark2005@cluster0.hdfk2tp.mongodb.net/training_institute_db';
const JWT_SECRET = 'fsd_lab_secret_key_2026';

// Trainee Schema
const traineeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    courseRegistered: { type: String, required: true },
    hasCSEBackground: { type: Boolean, default: false }
});

const Trainee = mongoose.model('Trainee', traineeSchema);

// Admin credentials (hardcoded for lab purposes)
const ADMIN_USER = { username: 'admin', password: 'admin123' };

// Login route - returns JWT token
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
        const token = jwt.sign({ username, role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// JWT Authentication Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ error: 'Invalid or expired token.' });
    }
}

// POST /api/trainees - Create trainee (public)
app.post('/api/trainees', async (req, res) => {
    try {
        const trainee = new Trainee(req.body);
        const saved = await trainee.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /api/trainees - Protected route (admin only)
app.get('/api/trainees', authenticateToken, async (req, res) => {
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
            console.log('Login: POST /api/login { username: "admin", password: "admin123" }');
            console.log('Protected: GET /api/trainees (requires Bearer token)');
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });
