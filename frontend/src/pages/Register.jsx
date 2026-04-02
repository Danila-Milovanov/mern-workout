import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password})
        })

        const data = await response.json();

        if (!response.ok) {
            setError(data.error);
        } else {
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Register</button>

            {error && <p>{error}</p>}

        </form>
    )
}

export default Register;