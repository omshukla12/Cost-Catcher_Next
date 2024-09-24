
const express = require('express');
const app = express();
const cors = require('cors');

// Use middleware
app.use(cors()); // To handle requests from different origins (i.e., frontend on a different port)
app.use(express.json()); // To parse JSON request bodies

// Import routes
const apiRoutes = require('./routes/routes');
app.use('/api', apiRoutes);

// Set the port
const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
