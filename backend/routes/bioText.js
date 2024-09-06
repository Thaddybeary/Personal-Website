const express = require('express')
const {
  createBioText
} = require('../controllers/bioTextController')

const router = express.Router()

//Get all bioTexts
router.get('/', (req, res) => {
  res.json({mssg: 'get all biotexts'})
})

//Get single bioText
router.get('/:id', (req, res) => {
  res.json({mssg: 'get a single biotext'})
})

//Post new bioText
router.post('/', createBioText)

//Delete bioText
router.delete('/:id', (req, res) => {
  res.json({mssg: 'delete bioText'})
})

//Patch bioText
router.patch('/:id', (req, res) => {
  res.json({mssg: 'patch bioText'})
})

module.exports = router