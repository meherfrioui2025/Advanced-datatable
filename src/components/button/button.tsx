import { type FC, type ReactNode, type MouseEventHandler } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "link"
  | "dark"
  | "none";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  link: "bg-transparent text-blue-600 hover:underline",
  dark: "bg-gray-800 text-white hover:bg-gray-900",
  none: "",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: FC<ButtonProps> = ({
  size = "md",
  variant = "secondary",
  disabled = false,
  className = "",
  onClick,
  children,
}) => {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded";
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${VARIANTS[variant]} ${SIZES[size]} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
