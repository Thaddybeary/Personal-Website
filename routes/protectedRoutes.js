const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/authMiddleware');

// Applying the isAuthenticated middleware to protect this route
router.get('/some-protected-route', isAuthenticated, (req, res) => {
    res.json({ message: "This is a protected route" });
});

module.exports = router;
