import { useState } from "react";
import { useAuthStore } from "./authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValid = email.includes("@") && password.length >= 6;

  const handleLogin = async () => {
  console.log("Login clicked"); // 👈 check this

  try {
    setLoading(true);
    setError("");
    await login(email, password);
    navigate("/dashboard");
  } catch (err: any) {
    console.log("LOGIN ERROR:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={container}>
      <div style={left}>
        <div>
          <h1 style={logo}>🏥 Health SaaS Raga.AI</h1>
          <h2 style={headline}>
            Smarter Healthcare <br /> Starts Here
          </h2>
          <p style={tagline}>
            Manage patients, analytics, and operations — all in one place.
          </p>
        </div>
      </div>

      <div style={right}>
        <div style={card}>
          <h2 style={title}>Welcome Back 👋</h2>
          <p style={subtitle}>Sign in to your account</p>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
            onFocus={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 0 2px rgba(99,102,241,0.3)")
            }
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={input}
            onFocus={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 0 2px rgba(99,102,241,0.3)")
            }
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />

          {error && <p style={errorText}>{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading || !isValid}
            style={{
              ...button,
              background: isValid
                ? "linear-gradient(135deg,#6366f1,#3b82f6)"
                : "#9ca3af",
              cursor: isValid ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (isValid)
                e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p style={footer}>
            Demo: <b>test@gmail.com</b> / <b>123456</b>
          </p>
        </div>
      </div>
    </div>
  );
}


const container = {
  display: "flex",
  height: "100vh",
  fontFamily: "Segoe UI",
  background: "linear-gradient(135deg,#eef2ff,#e0f2fe)",
};

const left = {
  flex: 1,
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
};

const logo = {
  fontSize: "22px",
  marginBottom: "20px",
};

const headline = {
  fontSize: "36px",
  fontWeight: "bold",
  lineHeight: "1.2",
  marginBottom: "15px",
};

const tagline = {
  opacity: 0.9,
  maxWidth: "300px",
};

const right = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px",
  width: "340px",
  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
};

const title = {
  marginBottom: "5px",
};

const subtitle = {
  marginBottom: "20px",
  color: "#6b7280",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none",
  transition: "0.2s",
};

const button = {
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  color: "white",
  fontWeight: "bold",
  transition: "0.2s",
};

const errorText = {
  color: "#ef4444",
  marginBottom: "10px",
  fontSize: "13px",
};

const footer = {
  marginTop: "15px",
  fontSize: "12px",
  color: "#6b7280",
  textAlign: "center" as const,
};