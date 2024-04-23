const profilePictureModel = require('../models/profilePictureModel');

const getProfilePicture = async (req, res) => {
    try {
        const id = req.params.id;
        const profilePicture = await profilePictureModel.findProfilePicture(id);
        if (profilePicture) {
            res.status(200).json(profilePicture);
        } else {
            res.status(404).send('Profile picture not found');
        }
    } catch (error) {
        console.error('Error in getProfilePicture:', error);
        res.status(500).send('Internal Server Error');
    }
};

const updateProfilePicture = async (req, res) => {
    const id = req.params.id;
    const { filePath } = req.body;
    try {
        const updateResult = await profilePictureModel.setProfilePicture(id, filePath);
        if (updateResult.modifiedCount > 0 || updateResult.upsertedCount > 0) {
            res.status(200).send('Profile picture updated successfully');
        } else {
            res.status(404).send('No profile picture found to update');
        }
    } catch (error) {
        console.error('Error in updateProfilePicture:', error);
        res.status(500).send('Internal Server Error');
    }
};

const addProfilePicture = async (req, res) => {
    const { filePath } = req.body;
    try {
        const insertResult = await profilePictureModel.addProfilePicture(filePath);
        res.status(201).json({ id: insertResult.insertedId, message: 'Profile picture added successfully' });
    } catch (error) {
        console.error('Error in addProfilePicture:', error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteProfilePicture = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteResult = await profilePictureModel.removeProfilePicture(id);
        if (deleteResult.deletedCount > 0) {
            res.status(200).send('Profile picture deleted successfully');
        } else {
            res.status(404).send('No profile picture found to delete');
        }
    } catch (error) {
        console.error('Error in deleteProfilePicture:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
  getProfilePicture,
  updateProfilePicture,
  addProfilePicture,
  deleteProfilePicture
};
