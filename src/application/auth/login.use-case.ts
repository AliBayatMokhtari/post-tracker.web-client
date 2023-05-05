import { useNavigate } from "react-router-dom";
import { useAuth } from "../../adaptors/auth/authAdaptor";
import { IAuthenticatedUser } from "../../domain/User";
import { useSetAuthenticatedUser } from "../context/AuthContext";
import client from "../supabase/getSupabaseClient";
import { useToast } from "../notification/notification-use-case";

export function useLogin() {
  const { login } = useAuth();
  const setAuthenticatedUser = useSetAuthenticatedUser();
  const navigate = useNavigate();
  const toast = useToast();

  const loginUser = async function (
    username: Username,
    password: string,
  ): Promise<IAuthenticatedUser> {
    try {
      const res = await login(username, password, {
        async loginFn(username, password): Promise<IAuthenticatedUser> {
          const res = await client.auth.signInWithPassword({
            email: username,
            password,
          });

          if (res.error) return Promise.reject(null);

          return Promise.resolve(res.data.session as IAuthenticatedUser);
        },
      });

      toast.success("Login successful");
      setAuthenticatedUser(res);
      navigate("/");

      return res;
    } catch (err) {
      toast.error("Invalid login credentials");
      return Promise.reject(null);
    }
  };

  return {
    loginUser,
  };
}
