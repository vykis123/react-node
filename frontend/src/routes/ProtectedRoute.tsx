import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedRoutes = () => {
  const token = useLocalStorage("get");
  const setLoggedIn = useOutletContext();

  return token ? (
    <Outlet context={{ setLoggedIn }} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoutes;
