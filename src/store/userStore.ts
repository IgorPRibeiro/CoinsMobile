import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, persist } from "zustand/middleware";
import { StorageApp } from "@/hooks/storage";

interface IUser {
  name: string;
  email: string;
  id: number;
  balance: number;
}

type State = {
  user: IUser | null;
};

type Actions = {
  setUser: (user: IUser) => void;
  buyItem: (value: number) => void;
  clearUser: () => void;
};

const userStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      user: null,
      setUser: (user) => {
        set({
          user,
        });
      },
      buyItem: (value: number) => {
        let _user = get().user;
        let _userBalance = get().user?.balance ?? 0;
        let _totalBalance = _userBalance - value;

        if (_totalBalance < 0) {
          return;
        }

        if (_user) {
          set({
            user: { ..._user, balance: _totalBalance },
          });
        }
      },
      clearUser: () => {
        set({
          user: null,
        });
      },
    })),
    {
      name: "user-storage",
      storage: createJSONStorage(() => new StorageApp()),
    }
  )
);

export default userStore;
