const express = require('express')
const {
  createWorkout,
  getWorkouts,
  getWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all
router.get('/', getWorkouts)

// GET single
router.get('/:id', getWorkout)

// POST
router.post('/', createWorkout)

module.exports = router