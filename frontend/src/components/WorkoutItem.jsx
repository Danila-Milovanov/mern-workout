// components/WorkoutItem.jsx
import UpdateWorkout from './UpdateWorkout.jsx';
import DeleteWorkout from './DeleteWorkout.jsx';

export default function WorkoutItem({ workout, setWorkouts }) {
  return (
    <div className="workout-item">
      <h4>{workout.title}</h4>
      <p className="workout-info">Load: {workout.load}kg | Reps: {workout.reps}</p>
      <UpdateWorkout workout={workout} setWorkouts={setWorkouts} />
      <DeleteWorkout workoutId={workout._id} setWorkouts={setWorkouts} />
    </div>
  );
}