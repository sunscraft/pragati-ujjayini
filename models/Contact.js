// models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  businessName: { type: String, required: true },
  category: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  servicesNeeded: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

// Checks if the model already exists to avoid overwriting it during compilation
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);