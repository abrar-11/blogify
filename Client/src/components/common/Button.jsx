import React from "react";

const Button = ({
  children,
  size = "md",
  color = "blue",
  onClick,
  className,
}) => {
  const getSizeClass = (size) => {
    switch (size) {
      case "sm":
        return "py-1 px-2 text-xs";
      case "md":
        return "py-2 px-4 text-sm";
      case "lg":
        return "py-3 px-6 text-base";
      default:
        return "py-2 px-4 text-sm";
    }
  };

  const getColorClass = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "green":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "red":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "gray":
        return "bg-gray-500 hover:bg-gray-600 text-white";
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white";
    }
  };

  const sizeClass = getSizeClass(size);
  const colorClass = getColorClass(color);

  return (
    <button
      className={`rounded ${sizeClass} ${colorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
