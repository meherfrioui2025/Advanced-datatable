import { type FC, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full h-10 px-3 py-2 text-base border rounded-md bg-white border-gray-300 placeholder-gray-400 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
