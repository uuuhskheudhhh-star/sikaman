const express = require('express');
const mongoose = require('mongoose');
const linkRoutes = require('./routes/linkRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/links', linkRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});