import React from "react";
import DoubleArrow from "../assets/icons/DoubleArrow";

const Button = ({
  onClick,

  ...rest
}) => {
  return (
    <button
      className="text-white mt-5 square text-left gradient-GREEN-reverse flex flex-row text-6xl items-center p-2"
      style={{ width: "800px" }}
      onClick={onClick}
    >
      <DoubleArrow height="180px" transform="rotate(180)" />
      BACK
    </button>
  );
};

export default Button;
