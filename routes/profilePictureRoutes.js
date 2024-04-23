const express = require('express');
const router = express.Router();
const profilePictureController = require('../controllers/profilePictureController');

router.get('/profilePictures/:id', profilePictureController.getProfilePicture);
router.post('/profilePictures', profilePictureController.addProfilePicture);
router.put('/profilePictures/:id', profilePictureController.updateProfilePicture);
router.delete('/profilePictures/:id', profilePictureController.deleteProfilePicture);

module.exports = router;
