import React from "react";
import HomeIcon from "../assets/icons/HomeIcon";

const Button = ({
  onClick,

  ...rest
}) => {
  return (
    <button
      className="text-white square text-left gradient-GREEN-reverse flex flex-row text-6xl items-center p-2 w-32 h-32"
      onClick={onClick}
    >
      <img src={require('../assets/icons/Home_Icon.svg').default} alt="" style={{height: '100%', width: '100%'}}/>
    </button>
  );
};

export default Button;
