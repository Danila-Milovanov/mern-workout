// components/DeleteWorkout.jsx
export default function DeleteWorkout({ workoutId, setWorkouts }) {
  const handleDelete = async () => {
    await fetch(`http://localhost:4000/api/workouts/${workoutId}`, {
      method: 'DELETE',
    });
    setWorkouts(prev => prev.filter(w => w._id !== workoutId));
  };

  return <button onClick={handleDelete}>Delete</button>;
}