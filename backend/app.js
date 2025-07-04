const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/messages', messageRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

module.exports = app;
