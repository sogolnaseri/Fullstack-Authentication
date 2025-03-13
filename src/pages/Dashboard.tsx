import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LazyContent from "../components/LazyContent";
import "../styles.css";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome, {user?.name}!</h2>
        <p className="email-text">Email: {user?.email}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="lazy-content-container">
        <h3>Lazy Loaded Content:</h3>
        <LazyContent />
      </div>
    </div>
  );
};

export default Dashboard;
