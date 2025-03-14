import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/dashboard"); // Redirect logged-in users
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      console.log("URL is ", process.env.REACT_APP_API_BASE_URL);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        { email, password }
      );

      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
};

export default Login;
