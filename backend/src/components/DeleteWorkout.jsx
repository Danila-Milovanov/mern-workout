import React from "react";

function DeleteWorkout({ id, setWorkouts }) {

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/workouts/${id}`, {
        method: "DELETE"
      });

      setWorkouts(prev =>
        prev.filter(workout => workout._id !== id)
      );

    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteWorkout;