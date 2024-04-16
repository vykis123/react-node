import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const PublicRoutes = () => {
  const token = useLocalStorage("get");
  const setLoggedIn = useOutletContext();

  return token ? (
    <Navigate to="/home" replace />
  ) : (
    <Outlet context={{ setLoggedIn }} />
  );
};

export default PublicRoutes;
