import { Navigate } from "react-router";
import { useAuth } from "../utils/useAuth";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}