import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/Login";
import AnalyticsPage from "../features/analytics/AnalyticsPage";
import PatientPage from "../features/patients/PatientPage";
import Layout from "../components/layout/Layout";
import { useAuthStore } from "../features/auth/authStore";
import type { ReactNode } from "react";

function Protected({ children }: { children: ReactNode }) {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!user) return <Navigate to="/" />;

  return <>{children}</>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <Protected>
              <Layout>
                <AnalyticsPage />
              </Layout>
            </Protected>
          }
        />

        <Route
          path="/patients"
          element={
            <Protected>
              <Layout>
                <PatientPage />
              </Layout>
            </Protected>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}