const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const assetRoutes = require('./routes/assetRoutes.js');
const app = express();

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mern-login', {});

app.use('/user', userRoutes);

app.use('/asset', assetRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
