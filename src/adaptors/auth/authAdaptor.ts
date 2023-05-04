import { AuthService } from "../../application/ports";

export function useAuth(): AuthService {
  return {
    async login(username, password, opts) {
      return opts.loginFn(username, password);
    },
    async logout(userId, opts) {
      return opts.logoutFn(userId);
    },
  };
}
