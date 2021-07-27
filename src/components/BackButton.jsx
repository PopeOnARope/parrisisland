import React from "react";
import DoubleArrow from "../assets/images/DoubleArrow";

const Button = ({
  onClick,

  ...rest
}) => {
  return (
    <button
      className="text-white mt-5 square text-left gradient-GREEN-reverse flex flex-row text-6xl items-center p-2"
      style={{ width: "400px" }}
      onClick={onClick}
    >
      <DoubleArrow height="90px" transform="rotate(180)" />
      BACK
    </button>
  );
};

export default Button;
