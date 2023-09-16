import express from 'express';
import cors from 'cors';

import { config } from 'dotenv';
config();

const API_KEY = process.env.API_KEY;

import fetch from 'node-fetch';

const app = express();
const PORT = 3001;
app.use(cors());

app.get('/weather', async (req, res) => {
    console.log('Weather endpoint hit'); // Check if this log appears
    const city = req.query.city;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching weather data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

