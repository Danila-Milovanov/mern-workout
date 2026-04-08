import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import { AuthContextProvider, useAuthContext } from "./context/AuthContext"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

function LogoutButton() {
  const { dispatch } = useAuthContext()
  
  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <button onClick={handleLogout} className="logout-btn">Logout</button>
  )
}

function Navbar() {
  const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <Link to="/" className="logo">💪 Workout Tracker</Link>
      <div className="nav-links">
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

function ProtectedRoute({ children }) {
  const { user } = useAuthContext()
  
  if (!user) {
    return <Navigate to="/login" />
  }
  
  return children
}

function AppContent() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App