import { useEffect } from "react";
import { useAuthStore } from "./features/auth/authStore";
import AppRoutes from "./app/routes";

function App() {
  const initAuth = useAuthStore((s) => s.initAuth);

 useEffect(() => {
  initAuth();
}, []);

  return <AppRoutes />;
}

export default App;