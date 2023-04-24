import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AuthProvider from "./providers/AuthProvider";
import Orders from "./components/Orders";
import ProtectRoute from "./components/ProtectRoute";
import Profile from "./components/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <ProtectRoute>
            <Profile />
          </ProtectRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectRoute>
            <Orders />
          </ProtectRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
