import { create } from "zustand";

interface userStoreState {
  userData: {
    imageuRL: string;
    name: string;
    tab: string;
  };
  setUserData: (data: any | null) => void;
}

export const UserStore = create<userStoreState>((set) => ({
  userData: {
    imageuRL:
      "https://lh3.googleusercontent.com/a/ACg8ocLVxeWDoqZwn6pzJoyRBQfN5I3lFfUmfJ42Fr8YNiyFFKToe-U=s100",
    name: "Jay Rajshakha",
    tab: "account",
  },
  setUserData: (data) => set(() => ({ userData: data })),
}));
