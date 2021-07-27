import React from "react";
import DoubleArrow from "../assets/images/DoubleArrow";

const sizes = {
  lg: "p-6 text-6xl",
  sm: "p-6 py-2 text-4xl",
};
const Button = ({
  children,
  onClick,
  variant,
  width,
  alignment,
  style,
  arrow,
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
      } ml-4 ${arrow && "inline-flex justify-between items-center"}`}
      style={{ width: width || (variant === "sm" ? "600px" : "680px") }}
      onClick={onClick}
    >
      {children}
      {arrow && <DoubleArrow height="50px" />}
    </button>
  );
};

export default Button;
