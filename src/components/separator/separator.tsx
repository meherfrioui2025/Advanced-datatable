import React, { type FC } from "react";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
  decorative?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Separator: FC<SeparatorProps> = ({
  orientation = "horizontal",
  className = "",
  decorative = true,
  ...props
}) => {
  const baseClass = "bg-gray-300 dark:bg-gray-200";
  const orientationClass =
    orientation === "horizontal" ? "h-0.5 w-8" : "w-0.5 h-8";
  const finalClassName = `${baseClass} ${orientationClass} ${className}`;

  return (
    <div
      role={decorative ? "presentation" : "separator"}
      aria-orientation={orientation}
      className={finalClassName}
      {...props}
    />
  );
};

export default Separator;
