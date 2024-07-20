const express = require('express');
const router = express.Router();
const { updateUserProfile , fetchUserProfile} = require('../contollers/profileController');

// Route for fetching user profile
router.get('/profile/:userId', fetchUserProfile);

// Route for updating user profile
router.put('/profile/:userId', updateUserProfile);

module.exports = router;
