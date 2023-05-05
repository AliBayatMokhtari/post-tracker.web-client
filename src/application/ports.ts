import { Tracking } from "../domain/Tracking";
import { User } from "../domain/User";
import { SupabaseClient, SupabaseClientOptions } from "@supabase/supabase-js";

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

export interface NotificationService {
  success(msg: string): void;
  error(msg: string): void;
}

export interface SupabaseService {
  createClient(
    supabaseUrl: string,
    supabaseKey: string,
    options?: SupabaseClientOptions<"public">,
  ): SupabaseClient;
}

export interface LocalStorageService {
  setObject<T extends object>(key: string, value: T): void;
  getObject<T, TDefault>(key: string, defaultValue: TDefault): T | TDefault;
  setString(key: string, value: string): void;
  getString(key: string): string;
}
