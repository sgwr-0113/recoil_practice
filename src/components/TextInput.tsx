import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "atoms/textState";

export const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};
