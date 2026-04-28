import { useAuthStore } from "../../features/auth/authStore";

export default function Navbar() {
  const { logout, user } = useAuthStore();

  return (
    <div style={navbar}>
      <div>
        <h2 style={{ margin: 0 }}>Healthcare Dashboard</h2>
        <p style={subText}>
          Welcome{user?.email ? `, ${user.email}` : ""}
        </p>
      </div>

      <button onClick={logout} style={logoutBtn}>
        🚪 Logout
      </button>
    </div>
  );
}


const navbar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "14px 20px",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",

  maxWidth: "1200px",  
};
const subText = {
  margin: 0,
  fontSize: "12px",
  color: "#6b7280",
};

const logoutBtn = {
  padding: "8px 14px",
  border: "none",
  borderRadius: "8px",
  background: "linear-gradient(135deg,#ef4444,#dc2626)",
  color: "white",
  cursor: "pointer",
};