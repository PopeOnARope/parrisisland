import React from "react";
import ExitIcon from "../assets/images/Exit_Icon";

const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-yellow h-full position-absolute cursor-pointer flex flex-col align-center"
    style={{ marginLeft: "1073px", width: "90px", height: "90px" }}
  >
    <ExitIcon />
  </button>
);

export default CloseButton;
