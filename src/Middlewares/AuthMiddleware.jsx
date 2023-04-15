import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddleware() {
  const isLogin = false;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}
