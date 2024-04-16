import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ element: Component }) => {
  const { user } = useAuth();
  return user ? <Component /> : <Navigate to="/log-in" />;
};

export default PrivateRoute;
