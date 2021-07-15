import React from "react";

const sizes = {
  lg: "p-6 text-6xl",
  sm: "p-6 py-4 text-4xl",
};
const Button = ({
  children,
  onClick,
  variant,
  width,
  alignment,
  style,
  COLOR,
  ...rest
}) => {
  return (
    <button
      className={`${
        style !== "outline"
          ? `gradient-${COLOR}`
          : `border-2 border-${COLOR.toLowerCase()}`
      } text-white ${sizes[variant]} mt-5 square text-${
        alignment || "center"
      } ml-4`}
      style={{ width: width || (variant === "sm" ? "600px" : "680px") }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
