const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json()); // Allows us to read JSON data
app.use(cors());         // Allows React to talk to this server

// 1. Connect to MongoDB Atlas (lab-007)
mongoose.connect('mongodb+srv://dark93531_db_user:dark2005@cluster0.hdfk2tp.mongodb.net/lab-007?retryWrites=true&w=majority');

// 2. Define what our data looks like
const FormModel = mongoose.model('Form', new mongoose.Schema({
    name: String,
    email: String,
    interest: String
}));

// 3. POST Route: Save data from React into MongoDB
app.post('/api/forms', async (req, res) => {
    await FormModel.create(req.body);
    res.send("Data saved successfully!");
});

// 4. GET Route: Send MongoDB data back to React
app.get('/api/forms', async (req, res) => {
    const allData = await FormModel.find();
    res.json(allData);
});

// Start the server
app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
