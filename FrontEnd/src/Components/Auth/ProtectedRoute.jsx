// src/Components/auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;          // 👈 send to login
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;