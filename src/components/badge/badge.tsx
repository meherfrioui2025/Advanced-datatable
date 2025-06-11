import React from "react";

type BadgeVariant = "primary" | "secondary" | "danger" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}


const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "text-gray-900 border border-gray-300",
};

const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClass =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-2";

  return (
    <div
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};

export default Badge;
