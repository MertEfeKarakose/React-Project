import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    console.warn("Kullanıcı giriş yapmamış, login sayfasına yönlendiriliyor...");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
