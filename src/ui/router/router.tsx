import { createHashRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Login from "../pages/Login";

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
