// components/WorkoutForm.jsx
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export default function WorkoutForm({ setWorkouts }) {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWorkout = { title, load, reps };

    const res = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(newWorkout),
    });

    const data = await res.json();

    if (res.ok) {
      setWorkouts(prev => [...prev, data]);
      setTitle(''); setLoad(''); setReps('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Workout</h3>
      <div className="form-group">
        <label>Title:</label>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Load (kg):</label>
        <input 
          type="number" 
          placeholder="Load (kg)" 
          value={load} 
          onChange={e => setLoad(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Reps:</label>
        <input 
          type="number" 
          placeholder="Reps" 
          value={reps} 
          onChange={e => setReps(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
}