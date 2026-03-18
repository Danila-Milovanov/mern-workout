// components/WorkoutItem.jsx
import UpdateWorkout from './UpdateWorkout.jsx';
import DeleteWorkout from './DeleteWorkout.jsx';

export default function WorkoutItem({ workout, setWorkouts }) {
  return (
    <div style={{ border: '1px solid gray', margin: '5px', padding: '5px' }}>
      <h3>{workout.title}</h3>
      <p>Load: {workout.load}kg | Reps: {workout.reps}</p>
      <UpdateWorkout workout={workout} setWorkouts={setWorkouts} />
      <DeleteWorkout workoutId={workout._id} setWorkouts={setWorkouts} />
    </div>
  );
}