import React from "react";
import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./components/CharacterCounter";

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
};
