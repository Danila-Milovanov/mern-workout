import UpdateWorkout from "./UpdateWorkout";
import DeleteWorkout from "./DeleteWorkout";

function WorkoutItem({ workout, setWorkouts}) {
    return (
        <div>
            <h3>{workout.name}</h3>
            <UpdateWorkout workout={workout} setWorkouts={setWorkouts} />
            <DeleteWorkout id={workout._id} setWorkouts={setWorkouts} />
        </div>
    );
}

export default WorkoutItem;
