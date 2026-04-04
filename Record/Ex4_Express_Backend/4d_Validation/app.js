const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Validation middleware
function validateUser(req, res, next) {
    const { email, password } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email. Email must contain an @ symbol.' });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ error: 'Invalid password. Password must be at least 6 characters long.' });
    }

    next();
}

// POST /register route with validation middleware
app.post('/register', validateUser, (req, res) => {
    res.status(200).json({ message: 'User Registered Successfully' });
});

app.listen(PORT, () => {
    console.log(`Validation Server running on http://localhost:${PORT}`);
    console.log('POST /register with { email, password } in body');
});
