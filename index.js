const express = require('express');
const app = express();
const path = require('path');
const projects = require('./data/projects.json');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to serve projects data
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
