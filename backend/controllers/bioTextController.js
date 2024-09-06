const BioText = require('../models/bioTextModel')
const mongoose = require('mongoose')

//get all bioTexts
const getBioTexts = async ( req, res) => {
  const bioTexts = await BioText.find({}).sort({createdAt: -1})

  res.status(200).json(bioTexts)
}

//get single bioText
const getBioText = async ( req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no such bioText'})
  }

  const bioText = await BioText.findById(id)

  if(!bioText){
    return res.status(404).json({error: 'no such bioText'})
  }

  res.status(200).json(bioText)
}

//create new bioText
const createBioText = async ( req, res) => {
  const { text } = req.body

  try {
    const bioText = await BioText.create({ text })
    res.status(200).json(bioText)
  } catch(error){
    res.status(400).json({error: error.message})
  }
}

//delete bioText
const deleteBioText = async ( req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no such bioText'})
  }

  const bioText = await BioText.findByIdAndDelete(id)

  if(!bioText){
    return res.status(400).json({error: 'no such bioText'})
  }

  res.status(200).json(bioText)
}

//update bioText
const updateBioText = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no such bioText'})
  }

  const bioText = await BioText.findByIdAndUpdate(id)

  if(!bioText){
    return res.status(400).json({error: 'no such bioText'})
  }

  res.status(200).json(bioText)
}

module.exports = {
  createBioText
}