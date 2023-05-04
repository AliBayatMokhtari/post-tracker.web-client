import { ComponentProps, FC } from "react";

const Input: FC<ComponentProps<"input">> = props => {
  return (
    <input
      className="bg-white border p-4 rounded-md focus:outline-blue-500"
      {...props}
    />
  );
};

export default Input;
