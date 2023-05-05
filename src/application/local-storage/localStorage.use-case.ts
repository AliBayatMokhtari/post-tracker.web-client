import { useLocalStorage } from "../../adaptors/local-storage/localStorageAdaptor";

export function useStorage() {
  const storageService = useLocalStorage();

  return storageService;
}
