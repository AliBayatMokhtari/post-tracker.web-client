import { createHashRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import { lazy } from "react";
import AuthenticatedRoute from "./AuthenticatedRoute";
import HomePage from "../pages/HomePage";

const Login = lazy(() => import("../pages/Login"));

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthenticatedRoute>
            <HomePage />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
