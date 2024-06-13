import { FC } from "react";

import { InputProps } from "./index.types";

const Input: FC<InputProps> = ({
  type = "password",
  placeholder = "Password",
  value,
  setParams
}) => {
  return (
    <input
      data-testid={`${placeholder}-input`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setParams(e.target.value)}
      className="mb-4 p-2 border"
    />
  );
};

export default Input;