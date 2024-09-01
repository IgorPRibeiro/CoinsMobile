import { StateStorage } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";
const storage = new MMKV();

export class StorageApp implements StateStorage {
  async getItem(name: string): Promise<string | null> {
    return storage.getString(name) ?? null;
  }
  async setItem(name: string, value: string): Promise<void> {
    return storage.set(name, value);
  }
  async removeItem(name: string) {
    return storage.delete(name);
  }
}
