import React from "react";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = "md", className = "" }) => {
  let sizeClasses = "h-6 w-6 border-4";

  if (size === "sm") sizeClasses = "h-4 w-4 border-2";
  else if (size === "lg") sizeClasses = "h-10 w-10 border-4";

  return (
    <div
      className={`animate-spin rounded-full border-t-transparent border-blue-500 ${sizeClasses} ${className}`}
    />
  );
};

export default Loader;
