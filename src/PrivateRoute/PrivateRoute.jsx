import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};
