const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory array for scan appointments
let appointments = [];
let nextId = 1;

// POST /api/scans - Create a new scan appointment
app.post('/api/scans', (req, res) => {
    const { patientName, scanType, date } = req.body;

    if (!patientName || !scanType || !date) {
        return res.status(400).json({ error: 'patientName, scanType, and date are required' });
    }

    const appointment = {
        id: nextId++,
        patientName,
        scanType,
        date
    };

    appointments.push(appointment);
    res.status(201).json(appointment);
});

// GET /api/scans - Get all scan appointments
app.get('/api/scans', (req, res) => {
    res.status(200).json(appointments);
});

// PUT /api/scans/:id - Update a scan appointment
app.put('/api/scans/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = appointments.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Appointment with ID ${id} not found` });
    }

    const { patientName, scanType, date } = req.body;

    if (patientName) appointments[index].patientName = patientName;
    if (scanType) appointments[index].scanType = scanType;
    if (date) appointments[index].date = date;

    res.status(200).json(appointments[index]);
});

// DELETE /api/scans/:id - Delete a scan appointment
app.delete('/api/scans/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = appointments.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Appointment with ID ${id} not found` });
    }

    appointments.splice(index, 1);
    res.status(200).json({ message: `Appointment with ID ${id} deleted successfully` });
});

app.listen(PORT, () => {
    console.log(`Scan Management Server running on http://localhost:${PORT}`);
});
