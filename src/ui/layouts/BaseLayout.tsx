import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="h-screen w-screen bg-slate-200">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
