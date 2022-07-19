import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "selectors/charCountState";

export const CharacterCount: React.FC = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};
