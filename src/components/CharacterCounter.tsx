import React from "react";
import { CharacterCount } from "./CharacterCount";
import { TextInput } from "./TextInput";

export const CharacterCounter: React.FC = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
