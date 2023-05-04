import { Tracking } from "../domain/Tracking";
import { User } from "../domain/User";

export interface TrackingService {
  getList(): Promise<Tracking[]>;
  get(): Promise<Tracking>;
  add(tracking: Tracking): Promise<Tracking>;
  update(trackingId: Id, tracking: Tracking): Promise<Tracking>;
  remove(trackingId: string): Promise<void>;
}

export interface AuthService {
  login(
    username: Username,
    password: string,
    opts: {
      loginFn: (username: Username, password: string) => Promise<User>;
    },
  ): Promise<User>;
  logout(
    userId: Id,
    opts: {
      logoutFn: (userId: Id) => Promise<void>;
    },
  ): Promise<void>;
}
