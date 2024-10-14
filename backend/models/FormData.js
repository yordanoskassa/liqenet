const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    trim: true
  },
  LastName: {
    type: String,
    required: true,
    trim: true
  },
  Age: {
    type: Number,
    required: true,
    min: 1
  },
  Level: {
    type: String,
    required: true,
    enum: ['one', 'two', 'three'], // Ensure these match the form values
    default: 'one'
  }
}, { timestamps: true });

const FormDataModel = mongoose.model('FormData', FormDataSchema);

module.exports = FormDataModel;
