import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const token = useSelector((store) => store.auth.token);
  const location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
}
