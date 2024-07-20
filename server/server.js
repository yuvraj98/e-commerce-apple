const express = require('express');
const app = express();
const database = require('./config/database');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profile');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

dotenv.config();
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/', profileRoutes); // Add profile routes

// Testing the server
app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running ...',
    });
});

// Listening to the server
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
