import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <div style={sidebar}>
      <div style={logo}>
        🏥 <span>Health SaaS Raga.AI</span>
      </div>

      <div style={{ marginTop: "30px" }}>
        <NavItem
          to="/dashboard"
          label="Dashboard"
          icon="📊"
          active={isActive("/dashboard")}
        />

        <NavItem
          to="/patients"
          label="Patients"
          icon="👨‍⚕️"
          active={isActive("/patients")}
        />
      </div>
    </div>
  );
}

function NavItem({ to, label, icon, active }: any) {
  return (
    <Link
      to={to}
      style={{
        ...navItem,
        background: active
          ? "linear-gradient(135deg,#6366f1,#3b82f6)"
          : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!active)
          e.currentTarget.style.background = "#334155";
      }}
      onMouseLeave={(e) => {
        if (!active)
          e.currentTarget.style.background = "transparent";
      }}
    >
      <span style={{ marginRight: "10px" }}>{icon}</span>
      {label}
    </Link>
  );
}


const sidebar = {
  width: "240px",
  height: "100vh",
  background: "#1e293b",
  position: "sticky" as const,
  top: 0,
};

const logo = {
  fontSize: "20px",
  fontWeight: "bold",
};

const navItem = {
  display: "flex",
  alignItems: "center",
  padding: "12px",
  borderRadius: "8px",
  color: "white",
  textDecoration: "none",
  marginBottom: "10px",
  transition: "0.2s",
};