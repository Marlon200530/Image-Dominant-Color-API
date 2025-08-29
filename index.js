import express from 'express';
import sharp from "sharp";
import cors from 'cors';
import morgan from 'morgan';
import getDominantColor from './getDominantColor.js';


const app = express();
//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Funcionalidades

app.post('/api/color', async (req, res) => {
    try {
        const { url } = req.body;

        console.log(url);

        const color = await getDominantColor(url);
        res.json({message: 'success', color});
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server on port 3000');
});

