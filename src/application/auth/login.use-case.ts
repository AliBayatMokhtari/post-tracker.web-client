import { useAuth } from "../../adaptors/auth/authAdaptor";
import { User } from "../../domain/User";

export function useLogin() {
  const { login } = useAuth();

  const loginUser = async function (
    username: Username,
    password: string,
  ): Promise<User> {
    try {
      const res = await login(username, password, {
        async loginFn(username, password): Promise<User> {
          const res = await fetch("/auth/local", {
            method: "POST",
            body: JSON.stringify({
              identifier: username,
              password,
            }),
          });

          // login was successful
          if (res.status === 200) {
            const json = await res.json();

            // 1. save user to local storage
            // 2. fill user context
            // 3. route to home page

            return Promise.resolve(json);
          }
          return Promise.reject(null);
        },
      });

      return res;
    } catch (err) {
      // 1. toast error
      return Promise.reject(null);
    }
  };

  return {
    loginUser,
  };
}
