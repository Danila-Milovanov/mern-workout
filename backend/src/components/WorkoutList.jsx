import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, setWorkouts}) {
    return (
        <div>
            {workouts.map(workout => (
                <WorkoutItem 
                    key={workout._id}
                    workout={workout}
                    setWorkouts={setWorkouts}
                />
            ))}
        </div>
    );
}

export default WorkoutList;
