import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  return (
    <div style={container}>
      <div style={sidebarWrapper}>
        <Sidebar />
      </div>

      <div style={main}>
        <div style={navbarWrapper}>
          <Navbar />
        </div>

        <div style={content}>
          {children}
        </div>
      </div>
    </div>
  );
}


const container = {
  display: "flex",
  height: "100vh",
  background: "linear-gradient(135deg,#eef2ff,#e0f2fe)",
};

const sidebarWrapper = {
  width: "240px",
  background: "#1e293b",
  color: "white",
};

const main = {
  flex: 1,
  display: "flex",
  flexDirection: "column" as const,
  overflow: "hidden",
};

const navbarWrapper = {
  background: "white",
  padding: "10px 20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const content = {
  flex: 1,
  overflowY: "auto" as const,
  padding: "20px",
};