// components/UpdateWorkout.jsx
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export default function UpdateWorkout({ workout, setWorkouts }) {
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);
  const { user } = useAuthContext()

  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({ load, reps }),
    });
    const updated = await res.json();

    if (res.ok) {
      setWorkouts(prev => prev.map(w => w._id === updated._id ? updated : w));
    }
  };

  return (
    <div className="update-workout">
      <input type="number" value={load} onChange={e => setLoad(e.target.value)} placeholder="Load" />
      <input type="number" value={reps} onChange={e => setReps(e.target.value)} placeholder="Reps" />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}