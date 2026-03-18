// components/WorkoutList.jsx
import { useEffect } from 'react';
import WorkoutItem from './WorkoutItem.jsx';

export default function WorkoutList({ workouts, setWorkouts }) {
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('http://localhost:4000/api/workouts');
      const data = await res.json();
      setWorkouts(data);
    };
    fetchWorkouts();
  }, [setWorkouts]);

  return (
    <div>
      {workouts.map(w => (
        <WorkoutItem key={w._id} workout={w} setWorkouts={setWorkouts} />
      ))}
    </div>
  );
}