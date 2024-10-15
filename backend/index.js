const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FormDataModel = require('./models/FormData'); // Ensure the model path is correct

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://kassay:BdyQyJWbTVH3l6K1@cluster1.gep2t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// POST route to handle form submissions
app.post('/form', async (req, res) => {
  try {
    console.log(req.body); // Log to see what the server is receiving
    const { FirstName, LastName, Age, Level } = req.body;
    
    // Check if required fields are provided
    if (!FirstName || !LastName || !Age || !Level) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create and save the form data to MongoDB
    const newFormData = new FormDataModel({ FirstName, LastName, Age, Level });
    const savedFormData = await newFormData.save();
    
    // Respond with the saved form data
    res.status(201).json(savedFormData);
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ error: 'Failed to save form data' });
  }
});

// Start the server
app.listen(80, '0.0.0.0', () => {
    console.log('Server is listening on port 80');
  });
