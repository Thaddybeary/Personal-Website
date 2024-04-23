const bioTextModel = require('../models/bioTextModel');

// Controller to handle retrieval of bio text
const getBioText = async (req, res) => {
    try {
        const id = req.params.id;
        const bioText = await bioTextModel.findBioText(id);
        if (bioText) {
            res.status(200).json(bioText);
        } else {
            res.status(404).send('Bio text not found');
        }
    } catch (error) {
        console.error('Error in getBioText:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Controller to handle updating bio text
const updateBioText = async (req, res) => {
    const id = req.params.id;
    const { text } = req.body;
    try {
        const updateResult = await bioTextModel.setBioText(id, text);
        if (updateResult.upsertedCount > 0 || updateResult.modifiedCount > 0) {
            res.status(200).send('Bio text updated successfully');
        } else {
            res.status(404).send('No bio text found to update');
        }
    } catch (error) {
        console.error('Error in updateBioText:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Controller to handle adding new bio text
const addBioText = async (req, res) => {
    const { text } = req.body;
    try {
        const insertResult = await bioTextModel.addBioText(text);
        res.status(201).json({ id: insertResult.insertedId, message: 'Bio text added successfully' });
    } catch (error) {
        console.error('Error in addBioText:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Controller to handle deletion of bio text
const deleteBioText = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteResult = await bioTextModel.removeBioText(id);
        if (deleteResult.deletedCount > 0) {
            res.status(200).send('Bio text deleted successfully');
        } else {
            res.status(404).send('No bio text found to delete');
        }
    } catch (error) {
        console.error('Error in deleteBioText:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getBioText,
    updateBioText,
    addBioText,
    deleteBioText
};
