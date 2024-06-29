// event-management-system-backend/models/Rsvp.js
const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  userId: { type: String, required: true },
  status: { type: String, enum: ['RSVPed', 'Attending', 'Not Attending'], default: 'RSVPed' },
});

module.exports = mongoose.model('Rsvp', rsvpSchema);
