const express = require('express');
const app = express();
const mongoose = require('mongoose');
const allRouters = require('./routes');
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.json());
app.use('/', allRouters);
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/video-club');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
    console.log('Connecté à MongoDB');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});