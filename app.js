const express = require('express');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'BE Service Bookshelf API RUNNING' });
});

// main routes
app.use('/books', bookRoutes);

module.exports = app;