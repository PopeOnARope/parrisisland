import React from "react";
import ExitIcon from "../assets/icons/Exit_Icon";

const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-yellow h-full position-absolute cursor-pointer flex flex-col align-center"
    style={{ right: 0, width: "180px", height: "180px" }}
  >
    <div className=' flex justify-center items-center flex-col w-full h-full square' style={{fontSize: '4.5rem'}}>X</div>
  </button>
);

export default CloseButton;
