// event-management-system-backend/routes/rsvps.js
const express = require('express');
const router = express.Router();
const Rsvp = require('../models/Rsvp');

router.post('/', async (req, res) => {
  const rsvp = new Rsvp({
    eventId: req.body.eventId,
    userId: req.body.userId,
    status: req.body.status,
  });

  try {
    const newRsvp = await rsvp.save();
    res.status(201).json(newRsvp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
