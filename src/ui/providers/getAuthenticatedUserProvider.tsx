import { FC, PropsWithChildren } from "react";
import { AuthenticatedUserProvider } from "../../application/context/AuthContext";

const Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <AuthenticatedUserProvider>{children}</AuthenticatedUserProvider>;
};

export function getAuthenticatedProvider() {
  return Provider;
}
