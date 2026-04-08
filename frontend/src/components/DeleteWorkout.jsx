// components/DeleteWorkout.jsx
import { useAuthContext } from '../context/AuthContext';

export default function DeleteWorkout({ workoutId, setWorkouts }) {
  const { user } = useAuthContext()

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:4000/api/workouts/${workoutId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    if (res.ok) {
      setWorkouts(prev => prev.filter(w => w._id !== workoutId));
    }
  };

  return <button onClick={handleDelete} className="delete-btn">Delete</button>;
}