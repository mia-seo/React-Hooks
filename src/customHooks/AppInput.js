import React from "react";
import { useInput } from "./useInput";

function AppInput() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

// input => value={name.value} onChange={name.onChange} = {...name}

export default AppInput;
