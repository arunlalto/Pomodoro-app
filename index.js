// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// Add this to server.js
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('MongoDB connected')

})
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
