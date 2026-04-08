// components/WorkoutList.jsx
import WorkoutItem from './WorkoutItem.jsx';

export default function WorkoutList({ workouts, setWorkouts }) {
  return (
    <div>
      {workouts.length === 0 ? (
        <p>No workouts yet. Add your first workout!</p>
      ) : (
        workouts.map(w => (
          <WorkoutItem key={w._id} workout={w} setWorkouts={setWorkouts} />
        ))
      )}
    </div>
  );
}