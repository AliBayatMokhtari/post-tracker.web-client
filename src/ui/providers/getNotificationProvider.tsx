import { ToastContainer } from "react-toastify";

const Provider = () => {
  return <ToastContainer theme="colored" position="bottom-right" />;
};

export default function getNotificationProvider() {
  return Provider;
}
