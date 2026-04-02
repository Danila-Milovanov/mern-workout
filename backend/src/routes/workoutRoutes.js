import express from 'express'
import {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout
} from '../controllers/workoutController.js'

import { requireAuth } from '../middleware/requireAuth.js'

const router = express.Router()

const token = localStorage.getItem("token")

const response = await fetch("/api/workouts", {
  headers: {
    "Authorization": `Bearer ${token}`
  }
})

await fetch("/api/workouts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify(workoutData)
})

router.use(requireAuth);

router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.post('/', createWorkout);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;