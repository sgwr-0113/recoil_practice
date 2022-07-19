import React from "react";
import { useRecoilValue } from "recoil";
import { markUpState } from "selectors/markUpState";
import { CharacterCount } from "./CharacterCount";
import { TextInput } from "./TextInput";

export const CharacterCounter: React.FC = () => {
  const color = useRecoilValue(markUpState);
  return (
    <div style={{ color: color }}>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
