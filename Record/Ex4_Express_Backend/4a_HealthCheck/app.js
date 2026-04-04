const express = require('express');
const app = express();
const PORT = 3000;

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Server is running smoothly' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});
