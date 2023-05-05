import { RouterProvider } from "react-router-dom";
import router from "./ui/router/router";
import { Suspense } from "react";
import getNotificationProvider from "./ui/providers/getNotificationProvider";
import { getAuthenticatedProvider } from "./ui/providers/getAuthenticatedUserProvider";

const NotificationProvider = getNotificationProvider();
const AuthenticatedUserProvider = getAuthenticatedProvider();

function App() {
  return (
    <AuthenticatedUserProvider>
      <NotificationProvider />
      <Suspense fallback={"loading"}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthenticatedUserProvider>
  );
}

export default App;
