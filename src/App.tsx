import { RouterProvider } from "react-router-dom";
import router from "./ui/router/router";
import { Suspense } from "react";
import getNotificationProvider from "./ui/providers/getNotificationProvider";

const NotificationProvider = getNotificationProvider();

function App() {
  return (
    <>
      <NotificationProvider />
      <Suspense fallback={"loading"}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
