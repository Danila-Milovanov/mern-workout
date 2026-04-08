import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const { dispatch } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password})
        })

        const data = await response.json();

        if (!response.ok) {
            setError(data.error);
        } else {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch({ type: 'LOGIN', payload: data })
            navigate("/");
        }
    }

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Register</button>

                {error && <div className="error">{error}</div>}
                
                <p className="switch-auth">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </form>
        </div>
    )
}

export default Register;