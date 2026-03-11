import Workout from '../models/workoutModel.js'
import mongoose from 'mongoose'

// CREATE
export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body

  if (!title || !reps || !load) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(201).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// GET ALL
export const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

// GET ONE
export const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID' })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({ error: 'Workout not found' })
  }

  res.status(200).json(workout)
}

// PATCH workout (aanpassen)
export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  // Check of ID geldig is
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: 'Ongeldige workout ID' });
  }

  try {
    const workout = await Workout.findByIdAndUpdate(
      id, 
      { ...req.body },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ error: 'Workout niet gevonden' });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE workout (verwijderen)
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  // Check of ID geldig is
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: 'Ongeldige workout ID' });
  }

  try {
    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ error: 'Workout niet gevonden' });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};