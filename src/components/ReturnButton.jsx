import React from "react";
import DoubleArrow from "../assets/images/DoubleArrow";
import Refresh from "../assets/images/Refresh";

const Button = ({
  onClick,

  ...rest
}) => {
  return (
    <button
      className="text-white square text-left gradient-GREEN-reverse flex flex-row text-6xl items-center p-2 w-32 h-32"
      onClick={onClick}
    >
      <Refresh />
    </button>
  );
};

export default Button;
