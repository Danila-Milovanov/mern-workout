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

router.use(requireAuth);

router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.post('/', createWorkout);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;