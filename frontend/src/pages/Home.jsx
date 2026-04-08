import { useState, useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'

function Home() {
  const [workouts, setWorkouts] = useState([])
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [user])

  return (
    <div className="home">
      <div className="workouts">
        <h2>My Workouts</h2>
        <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
      </div>
      <div className="create">
        <WorkoutForm setWorkouts={setWorkouts} />
      </div>
    </div>
  )
}

export default Home
