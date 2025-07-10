const express = require('express');
const connectDB = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Default route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Item routes
app.use('/api', itemRoutes);
app.use('/api/users', userRoutes);
// Example extra route
app.get('/orders', (req, res) => {
    res.send('this orders route');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
