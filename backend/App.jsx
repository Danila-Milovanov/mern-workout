import { useEffect, useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

function App() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/workouts")
            .then(res => res.json())
            .then(data => setWorkouts(data));
    }, []);


    return (
        <div>
            <h1>Workout App</h1>
            <WorkoutForm setWorkouts={setWorkouts} workouts={workouts} />
            <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
        </div>
    );
}