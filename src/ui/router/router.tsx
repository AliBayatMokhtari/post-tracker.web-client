import { createHashRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
