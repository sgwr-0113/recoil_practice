import { selector } from "recoil";
import { checkState } from "atoms/checkState";

export const markUpState = selector({
  key: "markUpState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const isChecked = get(checkState);
    if (isChecked) return "red";

    return "";
  },
});
