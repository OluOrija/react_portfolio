const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Routes
const eventsRouter = require('./routes/events');
const rsvpsRouter = require('./routes/rsvps');

app.use('/api/events', eventsRouter);
app.use('/api/rsvps', rsvpsRouter);

// Default route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Event Management System API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
