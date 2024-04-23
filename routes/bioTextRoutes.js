const express = require('express');
const router = express.Router();
const bioTextController = require('../controllers/bioTextController');

// Define the routes and associate them with controller functions
router.get('/bioText/:id', bioTextController.getBioText);
router.post('/bioText', bioTextController.addBioText);
router.put('/bioText/:id', bioTextController.updateBioText);
router.delete('/bioText/:id', bioTextController.deleteBioText);

module.exports = router;
