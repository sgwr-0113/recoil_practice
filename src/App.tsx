import React from "react";
import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./components/CharacterCounter";

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <h1>Recoil Practice</h1>
      <CharacterCounter />
    </RecoilRoot>
  );
};
