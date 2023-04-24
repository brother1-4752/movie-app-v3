import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export const testAtom = atom({
  key: "test",
  default: "red",
});
