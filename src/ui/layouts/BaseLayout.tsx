import { Outlet } from "react-router-dom";
import { useToast } from "../../application/notification/notification-use-case";

const BaseLayout = () => {
  const toast = useToast();

  return (
    <div className="h-screen w-screen bg-slate-200">
      <button onClick={() => toast.success("Ali BM")}>Click</button>
      <Outlet />
    </div>
  );
};

export default BaseLayout;
