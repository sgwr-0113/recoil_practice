import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "atoms/textState";
import { checkState } from "atoms/checkState";

export const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState);
  const [check, setCheck] = useRecoilState(checkState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onCheck = () => {
    setCheck(!check);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <input type="checkbox" checked={check} onChange={onCheck} />
      赤字にする
      <br />
      入力： {text}
    </div>
  );
};
