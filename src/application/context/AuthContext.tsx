import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IAuthenticatedUser } from "../../domain/User";
import { useStorage } from "../local-storage/localStorage.use-case";

const AuthContext = createContext<IAuthenticatedUser | null>(null);
const SetAuthContext = createContext<
  Dispatch<SetStateAction<IAuthenticatedUser>>
>(undefined!);

export const AuthenticatedUserProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const storage = useStorage();
  const [authenticatedUser, setAuthenticatedUser] =
    useState<IAuthenticatedUser>(
      storage.getObject<IAuthenticatedUser, null>("auth", null)!,
    );
  return (
    <SetAuthContext.Provider value={setAuthenticatedUser}>
      <AuthContext.Provider value={authenticatedUser}>
        {children}
      </AuthContext.Provider>
    </SetAuthContext.Provider>
  );
};

export function useAuthenticatedUser() {
  const user = useContext(AuthContext);

  return user;
}

export function useSetAuthenticatedUser() {
  const setUser = useContext(SetAuthContext);

  return setUser;
}
