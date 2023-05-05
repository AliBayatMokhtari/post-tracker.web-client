import { Outlet } from "react-router-dom";
import client from "../../application/supabase/getSupabaseClient";
import { useEffect } from "react";

const BaseLayout = () => {
  useEffect(() => {
    client.auth
      .signInWithPassword({
        email: "ali.bayatmokhtari96social@gmail.com",
        password: "1234876590@abm",
      })
      .then(res => {
        console.log(res);
      });
  }, []);

  return (
    <div className="h-screen w-screen bg-slate-200">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
