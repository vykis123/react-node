import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../pages/RootLayout";
import PublicRoutes from "./PublicRoutes";
import ErrorPage from "../pages/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicRoutes />,
        children: [
          { element: <Login />, index: true },
          { path: "/register", element: <Register />, index: true },
        ],
      },
      {
        element: <ProtectedRoutes />,
        children: [{ path: "/home", element: <Home /> }],
      },
    ],
  },
]);
