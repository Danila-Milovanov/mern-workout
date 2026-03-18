// components/WorkoutForm.jsx
import { useState } from 'react';

export default function WorkoutForm({ setWorkouts }) {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWorkout = { title, load, reps };

    const res = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWorkout),
    });

    const data = await res.json();

    setWorkouts(prev => [...prev, data]);
    setTitle(''); setLoad(''); setReps('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Load (kg)" value={load} onChange={e => setLoad(e.target.value)} />
      <input placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)} />
      <button type="submit">Add Workout</button>
    </form>
  );
}