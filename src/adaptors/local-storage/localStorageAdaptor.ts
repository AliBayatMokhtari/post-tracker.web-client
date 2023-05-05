import { LocalStorageService } from "../../application/ports";

const storage = window.localStorage;

export function useLocalStorage(): LocalStorageService {
  return {
    getObject(key, defaultValue) {
      const value = storage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    },
    setObject(key, value) {
      storage.setItem(key, JSON.stringify(value));
    },
    getString(key) {
      const value = storage.getItem(key);
      return value ?? "";
    },
    setString(key, value) {
      storage.setItem(key, value);
    },
  };
}
