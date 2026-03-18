import React, { useState } from "react";

function UpdateWorkout({ workout, setWorkouts }) {

  const [name, setName] = useState(workout.name);
  const [editing, setEditing] = useState(false);

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/workouts/${workout._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name })
        }
      );

      const updatedWorkout = await response.json();

      // Update state
      setWorkouts(prev =>
        prev.map(w =>
          w._id === workout._id ? updatedWorkout : w
        )
      );

      setEditing(false);

    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div>
      {editing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <button onClick={() => setEditing(true)}>
          Update
        </button>
      )}
    </div>
  );
}

export default UpdateWorkout;