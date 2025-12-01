const express = require('express');
const router = express.Router();
const { checkJwt, attachUser } = require('../middlewares/authMiddleware');

// Protected route example
router.get('/private', checkJwt, attachUser, (req, res) => {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.',
    user: req.user
  });
});

// Save course route
router.post('/save-course', checkJwt, attachUser, (req, res) => {
  // Logic to save course would go here
  // req.user contains the user info (sub, email, etc.)
  console.log('User saving course:', req.user);
  res.json({ message: 'Course saved successfully', userId: req.user.sub });
});

// Get user courses route
router.get('/user-courses', checkJwt, attachUser, (req, res) => {
  // Logic to get user courses
  console.log('Fetching courses for user:', req.user);
  res.json({ courses: [], userId: req.user.sub });
});

module.exports = router;
