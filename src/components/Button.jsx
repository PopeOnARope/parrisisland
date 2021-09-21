import React from "react";
import DoubleArrow from "../assets/icons/DoubleArrow";

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
  if (variant === "yr") {
    return (
      <button
        className={`gradient-${COLOR} text-white p-6 py-2 text-6xl inline-flex justify-end items-center square ml-4`}
        style={{ width: "800px", marginBottom: "52px" }}
        onClick={onClick}
      >
        {children}
        {arrow && <DoubleArrow height="180px" />}
      </button>
    );
  }
  return (
    <button
      className={`${
        style !== "outline"
          ? `gradient-${COLOR}`
          : `border-2 border-${COLOR.toLowerCase()}`
      } text-white ${sizes[variant]} mt-4 square text-${
        alignment || "center"
      } ml-4 ${arrow && "inline-flex justify-between items-center"}`}
      style={{ width: width || (variant === "sm" ? "1200px" : "1360px") }}
      onClick={onClick}
    >
      {children}
      {arrow && <DoubleArrow height="100px" />}
    </button>
  );
};

export default Button;
