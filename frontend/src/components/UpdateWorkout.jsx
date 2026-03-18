// components/UpdateWorkout.jsx
import { useState } from 'react';

export default function UpdateWorkout({ workout, setWorkouts }) {
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);

  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ load, reps }),
    });
    const updated = await res.json();

    setWorkouts(prev => prev.map(w => w._id === updated._id ? updated : w));
  };

  return (
    <div>
      <input type="number" value={load} onChange={e => setLoad(e.target.value)} />
      <input type="number" value={reps} onChange={e => setReps(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}