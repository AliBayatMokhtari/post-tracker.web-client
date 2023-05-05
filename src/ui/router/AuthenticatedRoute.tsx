import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticatedUser } from "../../application/context/AuthContext";

const AuthenticatedRoute: FC<PropsWithChildren<{}>> = ({ children }) => {
  const user = useAuthenticatedUser();

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default AuthenticatedRoute;
