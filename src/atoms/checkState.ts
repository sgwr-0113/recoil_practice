import { atom } from "recoil";

export const checkState = atom({
  key: "checkState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
